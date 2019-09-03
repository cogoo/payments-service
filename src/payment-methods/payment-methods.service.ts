import { Injectable } from '@nestjs/common';
import { StripeService } from '../core/stripe/stripe.service';
import { Stripe } from '../core/stripe/stripe.iterface';
import { PaymentMethodsDto } from './payment-methods.dto';

@Injectable()
export class PaymentMethodsService {
  constructor(private readonly stripeService: StripeService) {}

  async createPaymentMethods(
    paymentMethod: PaymentMethodsDto
  ): Promise<Stripe.PaymentMethods> {
    const { cardNumber, cvc, expMonth, expYear } = paymentMethod;

    return this.stripeService.createPaymentMethods(
      cardNumber,
      expMonth,
      expYear,
      cvc
    );
  }
}
