import { Controller, Module, Post, Body } from '@nestjs/common';
import { PaymentIntentsService } from './payment-intents.service';
import { PaymentIntentsDto } from './payment-intents.dto';
import { Stripe } from '../core/stripe/stripe.iterface';

@Controller('payment_intents')
export class PaymentIntentsController {
  constructor(private readonly paymentIntentsService: PaymentIntentsService) {}

  @Post()
  async createPaymentsIntent(
    @Body() paymentIntentDto: PaymentIntentsDto
  ): Promise<Stripe.PaymentIntents> {
    const paymentIntent = await this.paymentIntentsService.createPaymentsIntent(
      paymentIntentDto
    );

    return paymentIntent;
  }
}

@Module({
  controllers: [PaymentIntentsController],
  providers: [PaymentIntentsService],
})
export class PaymentIntentsModule {}
