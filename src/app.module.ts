import { Module } from '@nestjs/common';
import { PaymentIntentsModule } from './payment-intents/payment-intents.controller';

@Module({
  imports: [PaymentIntentsModule],
})
export class AppModule {}
