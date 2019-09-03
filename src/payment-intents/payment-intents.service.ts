import { Injectable } from '@nestjs/common';
import { StripeService } from '../core/stripe/stripe.service';
import { Stripe } from '../core/stripe/stripe.iterface';
import { PaymentIntentsDto } from './payment-intents.dto';

@Injectable()
export class PaymentIntentsService {
  constructor(private readonly stripeService: StripeService) {}

  async createPaymentsIntent(
    paymentsIntent: PaymentIntentsDto
  ): Promise<Stripe.PaymentIntents> {
    const { amount, paymentMethodID } = paymentsIntent;

    const paymentIntents = await this.stripeService.createPaymentIntents(
      amount,
      paymentMethodID
    );

    return paymentIntents;
  }
}
