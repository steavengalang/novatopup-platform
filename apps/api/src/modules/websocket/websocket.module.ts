import { Module } from '@nestjs/common';
import { TopupGateway } from './topup.gateway';
import { TopupModule } from '../topup/topup.module';
import { PaymentModule } from '../payment/payment.module';

@Module({
  imports: [TopupModule, PaymentModule],
  providers: [TopupGateway],
})
export class WebsocketModule {}
