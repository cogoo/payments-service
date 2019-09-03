import { Module } from '@nestjs/common';
import { PaymentIntentsModule } from './payment-intents/payment-intents.controller';
import { PaymentMethodsModule } from './payment-methods/payment-methods.controller';
import { CoreModule } from './core/core.module';

@Module({
  imports: [PaymentIntentsModule, PaymentMethodsModule, CoreModule],
  providers: [],
})
export class AppModule {}
