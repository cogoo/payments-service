import { Controller, Module, Post } from '@nestjs/common';
import { PaymentMethodsService } from './payment-methods.service';

@Controller('payment_methods')
export class PaymentMethodsController {
  @Post()
  async create() {}
}

@Module({
  controllers: [PaymentMethodsController],
  providers: [PaymentMethodsService],
})
export class PaymentMethodsModule {}
