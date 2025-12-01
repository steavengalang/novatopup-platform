import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { TopupService } from '../topup/topup.service';
import { PaymentService } from '../payment/payment.service';
import { TopupStatus } from '@prisma/client';

@WebSocketGateway({ cors: true })
export class TopupGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(
    private topupService: TopupService,
    private paymentService: PaymentService,
  ) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('initiate_topup')
  async handleTopup(client: Socket, payload: any) {
    const { userId, gameId, priceOptionId, gameAccountId, paymentMethod } = payload;

    try {
      // Create topup transaction
      const topup = await this.topupService.createTopup({
        userId,
        gameId,
        priceOptionId,
        gameAccountId,
        paymentMethod,
      });

      // Emit initial status
      client.emit('topup_status', {
        transactionId: topup.id,
        status: 'pending',
        message: 'Transaction created',
      });

      // Process payment
      const payment = await this.paymentService.processPayment({
        amount: Number(topup.price),
        method: paymentMethod,
        userId,
      });

      // Simulate payment success after 3 seconds
      setTimeout(async () => {
        await this.topupService.updateTopupStatus(topup.id, TopupStatus.PROCESSING);
        client.emit('topup_status', {
          transactionId: topup.id,
          status: 'processing',
          message: 'Payment confirmed, processing topup...',
        });

        // Simulate topup completion after 2 more seconds
        setTimeout(async () => {
          await this.topupService.updateTopupStatus(topup.id, TopupStatus.SUCCESS);
          client.emit('topup_status', {
            transactionId: topup.id,
            status: 'success',
            message: 'Topup completed successfully!',
            itemId: gameId,
          });
        }, 2000);
      }, 3000);

      return { transactionId: topup.id };
    } catch (error) {
      client.emit('topup_status', {
        status: 'error',
        message: error.message,
      });
    }
  }

  @SubscribeMessage('check_status')
  async handleCheckStatus(client: Socket, payload: { transactionId: string }) {
    const topup = await this.topupService.getTopupById(payload.transactionId);
    
    if (topup) {
      client.emit('topup_status', {
        transactionId: topup.id,
        status: topup.status.toLowerCase(),
        message: `Current status: ${topup.status}`,
      });
    }
  }
}
