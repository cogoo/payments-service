import { Module, Global } from '@nestjs/common';
import { StripeService } from './stripe/stripe.service';

@Global()
@Module({
  providers: [StripeService],
  exports: [StripeService],
})
export class CoreModule {}
