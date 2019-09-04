import { Injectable } from '@nestjs/common';
import { StripeService } from '../core/stripe/stripe.service';
import { Stripe } from '../core/stripe/stripe.iterface';
import { PaymentIntentsDto } from './payment-intents.dto';
import { PaymentIntentResponse } from './payment-intents.interface';

@Injectable()
export class PaymentIntentsService {
  constructor(private readonly stripeService: StripeService) {}

  async createPaymentsIntent(
    paymentsIntent: PaymentIntentsDto
  ): Promise<PaymentIntentResponse> {
    const {
      amount,
      paymentMethodID,
      statementDescriptor,
      returnUrl,
    } = paymentsIntent;

    const paymentIntents = await this.stripeService.createPaymentIntents(
      amount,
      paymentMethodID,
      statementDescriptor,
      returnUrl
    );

    return generatePaymentResponse(paymentIntents);
  }

  async retrievePaymentIntents(id: string): Promise<Stripe.PaymentIntents> {
    return this.stripeService.retrievePaymentIntents(id);
  }
}

function generatePaymentResponse(
  intent: Stripe.PaymentIntents
): PaymentIntentResponse {
  console.log(`:: intent`, intent);
  if (intent.status === 'requires_action') {
    if (intent.next_action.type === 'use_stripe_sdk') {
      return {
        payment_intent_id: intent.id,
        requires_action: true,
        payment_intent_client_secret: intent.client_secret,
      };
    }

    return {
      payment_intent_id: intent.id,
      requires_action: true,
      next_action: intent.next_action,
    };
  }

  if (intent.status === 'succeeded') {
    return {
      success: true,
    };
  }

  return {
    error: 'Invalid PaymentIntent status',
  };
}
