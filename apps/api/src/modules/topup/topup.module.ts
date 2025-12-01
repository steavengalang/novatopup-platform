import { Module } from '@nestjs/common';
import { TopupService } from './topup.service';
import { TopupResolver } from './topup.resolver';
import { PaymentModule } from '../payment/payment.module';

@Module({
  imports: [PaymentModule],
  providers: [TopupService, TopupResolver],
  exports: [TopupService],
})
export class TopupModule {}
