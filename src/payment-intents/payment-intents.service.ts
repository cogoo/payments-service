// tslint:disable: prefer-function-over-method
import { Injectable } from '@nestjs/common';
import * as Stripe from 'stripe';

@Injectable()
export class PaymentIntentsService {
  private readonly stripe = new Stripe(process.env.STRIPE_TEST);

  async createPaymentsIntent(
    amount: number,
    paymentMethodID: string
  ): Promise<Stripe.paymentIntents.IPaymentIntent> {
    // tslint:disable-next-line: no-try
    try {
      const paymentIntents = await this.stripe.paymentIntents.create({
        amount,
        currency: 'gbp',
        statement_descriptor: 'Custom descriptor',
        payment_method: paymentMethodID,
        confirmation_method: 'manual',
        confirm: true,
      });

      return paymentIntents;
    } catch (error) {
      return error;
    }
  }
}
