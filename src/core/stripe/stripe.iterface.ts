import * as stripe from 'stripe';

// tslint:disable-next-line: no-namespace
export namespace Stripe {
  export type PaymentIntents = stripe.paymentIntents.IPaymentIntent;
  export type PaymentMethods = stripe.paymentMethods.IPaymentMethod;
}
