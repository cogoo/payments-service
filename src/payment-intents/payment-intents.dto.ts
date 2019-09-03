export class PaymentIntentsDto {
  readonly amount: number;
  readonly paymentMethodID: string;
  readonly statementDescriptor: string;
  readonly returnUrl: string;
}
