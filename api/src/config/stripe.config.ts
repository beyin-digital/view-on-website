import { registerAs } from '@nestjs/config';
import { StripeConfig } from './config.type';

export default registerAs<StripeConfig>('stripe', () => ({
  secretKey: process.env.STRIPE_SECRET_KEY ?? '',
  publicKey: process.env.STRIPE_PUBLIC_KEY ?? '',
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET ?? '',
}));
