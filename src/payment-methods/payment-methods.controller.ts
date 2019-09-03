import { Controller, Module, Post, Body } from '@nestjs/common';
import { PaymentMethodsService } from './payment-methods.service';
import { Stripe } from '../core/stripe/stripe.iterface';
import { PaymentMethodsDto } from './payment-methods.dto';

@Controller('payment_methods')
export class PaymentMethodsController {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}
  @Post()
  async createPaymentMethods(
    @Body() paymentMethodsDto: PaymentMethodsDto
  ): Promise<Stripe.PaymentMethods> {
    return this.paymentMethodsService.createPaymentMethods(paymentMethodsDto);
  }
}

@Module({
  controllers: [PaymentMethodsController],
  providers: [PaymentMethodsService],
})
export class PaymentMethodsModule {}
