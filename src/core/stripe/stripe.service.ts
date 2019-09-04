import { Injectable } from '@nestjs/common';
import * as Stripe from 'stripe';

@Injectable()
export class StripeService {
  private readonly stripe = new Stripe(process.env.STRIPE_OG_TEST);

  async createPaymentIntents(
    amount: number,
    paymentMethodID: string,
    statementDescriptor,
    returnUrl: string
  ): Promise<Stripe.paymentIntents.IPaymentIntent> {
    return this.stripe.paymentIntents.create({
      amount,
      currency: 'gbp',
      statement_descriptor: statementDescriptor,
      payment_method: paymentMethodID,
      confirmation_method: 'manual',
      confirm: true,
      return_url: returnUrl,
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

  async retrievePaymentIntents(
    id: string
  ): Promise<Stripe.paymentIntents.IPaymentIntent> {
    return this.stripe.paymentIntents.retrieve(id);
  }
}
