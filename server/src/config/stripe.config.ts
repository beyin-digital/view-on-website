import { registerAs } from '@nestjs/config';
import { StripeConfig } from './config.type';

export default registerAs<StripeConfig>('stripe', () => ({
  secretKey: process.env.STRIPE_SECRET_KEY ?? '',
  currency: process.env.STRIPE_CURRENCY ?? '',
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET ?? '',
}));
