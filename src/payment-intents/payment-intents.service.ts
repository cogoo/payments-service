import { Injectable } from '@nestjs/common';
import { StripeService } from '../core/stripe/stripe.service';
import { Stripe } from '../core/stripe/stripe.iterface';

@Injectable()
export class PaymentIntentsService {
  constructor(private readonly stripeService: StripeService) {}

  async createPaymentsIntent(
    amount: number,
    paymentMethodID: string
  ): Promise<Stripe.PaymentIntents> {
    // tslint:disable-next-line: no-try
    try {
      const paymentIntents = await this.stripeService.createPaymentIntents(
        amount,
        paymentMethodID
      );

      return paymentIntents;
    } catch (error) {
      return error;
    }
  }
}
