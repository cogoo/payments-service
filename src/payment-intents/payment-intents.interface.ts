export interface PaymentIntentResponse {
  readonly requires_action?: true;
  readonly payment_intent_client_secret?: string;
  readonly success?: boolean;
  readonly error?: string;
  readonly next_action?: {};
}
