import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Stripe } from 'stripe';

import { AllConfigType } from 'src/config/config.type';
import { StripeCreateCustomerDto } from './dto/stripe-create-customer.dto';
import { StripeCreateSetupIntentDto } from './dto/stripe-create-setup-intent.dto';
import { UsersService } from 'src/users/users.service';
import { CreateCheckoutSessionDto } from './dto/create-checkout-session.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class StripeService {
  public readonly stripe: Stripe;

  constructor(
    private configService: ConfigService<AllConfigType>,
    private usersService: UsersService,
  ) {
    this.stripe = new Stripe(this.configService.get('stripe').secretKey, {
      apiVersion: '2022-11-15',
    });
  }

  public async createCustomer(
    createStripeCustomerDTO: StripeCreateCustomerDto,
  ): Promise<Stripe.Customer> {
    return this.stripe.customers.create({
      email: createStripeCustomerDTO.email,
      name: createStripeCustomerDTO.name,
    });
  }

  public async createSetupIntent(
    setupIntentDto: StripeCreateSetupIntentDto,
  ): Promise<Stripe.SetupIntent> {
    const user = await this.usersService.findOne({
      stripeCustomerId: setupIntentDto.customerId,
    });
    return this.stripe.setupIntents.create({
      customer: user?.stripeCustomerId as string,
      automatic_payment_methods: {
        enabled: true,
      },
    });
  }

  async createCheckoutSession(
    user: User,
    createCheckoutSessionDto?: CreateCheckoutSessionDto,
  ) {
    const frontendURL = this.configService.get('app').frontendDomain;
    const checkoutSession = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      success_url: `${frontendURL}/payment?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendURL}/payment?sessionId={CHECKOUT_SESSION_ID}`,
      customer: createCheckoutSessionDto?.customerId || '',
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: createCheckoutSessionDto?.letters || '',
              description: `Subscription for the rights to use the #${
                createCheckoutSessionDto?.letters || ''
              } hashtag`,
            },
            recurring: {
              interval: 'month',
              interval_count: 1,
            },
            unit_amount: (createCheckoutSessionDto?.price || 0) * 100,
          },
          quantity: 1,
        },
      ],
    });
    return { ...checkoutSession };
  }

  public webhooks(stripeSignature: string, stripeEvent: any) {
    const endpointSecret = this.configService.get('stripe').webhookSecret;

    const event = this.stripe.webhooks.constructEvent(
      stripeEvent,
      stripeSignature,
      endpointSecret,
    );
    return event;
  }

  processEvent(event: Stripe.Event) {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        // Fulfill the purchase...
        console.log(session);
        break;
      case 'invoice.paid':
        const invoice = event.data.object as Stripe.Invoice;
        // Fulfill the purchase...
        console.log(invoice);
        break;
      case 'invoice.payment_failed':
        const invoicePaymentFailed = event.data.object as Stripe.Invoice;
        // Send notification to customer...
        console.log(invoicePaymentFailed);
        break;
      case 'customer.subscription.created':
        const subscriptionCreated = event.data.object as Stripe.Subscription;
        // Send notification to customer...
        console.log(subscriptionCreated);
        break;
      case 'customer.subscription.deleted':
        const subscriptionDeleted = event.data.object as Stripe.Subscription;
        // Send notification to customer...
        console.log(subscriptionDeleted);
        break;
      case 'customer.subscription.updated':
        const subscriptionUpdated = event.data.object as Stripe.Subscription;
        // Send notification to customer...
        console.log(subscriptionUpdated);
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`, event);
    }
  }
}
