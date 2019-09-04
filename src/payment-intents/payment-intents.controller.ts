import { Controller, Module, Post, Body, Get, Param } from '@nestjs/common';
import { PaymentIntentsService } from './payment-intents.service';
import { PaymentIntentsDto } from './payment-intents.dto';
import { Stripe } from '../core/stripe/stripe.iterface';
import { PaymentIntentResponse } from './payment-intents.interface';

@Controller('payment_intents')
export class PaymentIntentsController {
  constructor(private readonly paymentIntentsService: PaymentIntentsService) {}

  @Post()
  async createPaymentIntents(
    @Body() paymentIntentDto: PaymentIntentsDto
  ): Promise<PaymentIntentResponse> {
    return this.paymentIntentsService.createPaymentsIntent(paymentIntentDto);
  }

  @Post(':id/confirm')
  async confirmPaymentIntents(
    @Param('id') paymentIntentID: string
  ): Promise<PaymentIntentResponse> {
    return this.paymentIntentsService.confirmPaymentsIntent(paymentIntentID);
  }

  @Get(':id')
  async retrievePaymentIntents(
    @Param('id') paymentIntentID: string
  ): Promise<PaymentIntentResponse> {
    return this.paymentIntentsService.retrievePaymentIntents(paymentIntentID);
  }
}

@Module({
  controllers: [PaymentIntentsController],
  providers: [PaymentIntentsService],
})
export class PaymentIntentsModule {}
