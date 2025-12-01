import { Injectable } from '@nestjs/common';
import { PaymentMethod } from '@prisma/client';

@Injectable()
export class PaymentService {
  async processPayment(data: {
    amount: number;
    method: PaymentMethod;
    userId: string;
  }) {
    // Placeholder: Integration dengan Midtrans, Stripe, dll
    console.log('Processing payment:', data);

    // Simulate payment processing
    return {
      id: `pay_${Date.now()}`,
      status: 'pending',
      amount: data.amount,
      method: data.method,
    };
  }

  async checkPaymentStatus(paymentId: string) {
    // Placeholder: Check status dari payment gateway
    console.log('Checking payment status:', paymentId);

    // Simulate random success/pending
    const statuses = ['success', 'pending', 'failed'];
    return {
      id: paymentId,
      status: statuses[Math.floor(Math.random() * statuses.length)],
    };
  }
}
