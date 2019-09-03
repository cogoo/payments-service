import { Injectable } from '@nestjs/common';
import * as Stripe from 'stripe';

@Injectable()
export class StripeService {
  private readonly stripe = new Stripe(process.env.STRIPE_TEST);

  async createPaymentIntents(
    amount: number,
    paymentMethodID: string
  ): Promise<Stripe.paymentIntents.IPaymentIntent> {
    return this.stripe.paymentIntents.create({
      amount,
      currency: 'gbp',
      statement_descriptor: 'Custom descriptor',
      payment_method: paymentMethodID,
      confirmation_method: 'manual',
      confirm: true,
    });
  }

  async createPaymentMethods(
    cardNumber: string,
    expMonth: number,
    expYear: number,
    cvc: string
  ): Promise<Stripe.paymentMethods.IPaymentMethod> {
    return this.stripe.paymentMethods.create({
      type: 'card',
      card: {
        cvc,
        number: cardNumber,
        exp_month: expMonth,
        exp_year: expYear,
      },
    });
  }
}
