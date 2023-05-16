import { ConflictException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Stripe } from 'stripe';

import { AllConfigType } from 'src/config/config.type';
import { StripeCreateCustomerDto } from './dto/stripe-create-customer.dto';
import { StripeCreateSetupIntentDto } from './dto/stripe-create-setup-intent.dto';
import { UsersService } from 'src/users/users.service';
import { CreateCheckoutSessionDto } from './dto/create-checkout-session.dto';
import { User } from 'src/users/entities/user.entity';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { OrdersService } from 'src/orders/orders.service';
import { KeywordsService } from 'src/keywords/keywords.service';
import { CreateSubscriptionDto } from 'src/subscriptions/dto/create-subscription.dto';
import { UpdateSubscriptionDto } from 'src/subscriptions/dto/update-subscription.dto';
import { Order } from 'src/orders/entities/order.entity';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';
import { Keyword } from 'src/keywords/entities/keyword.entity';

@Injectable()
export class StripeService {
  public readonly stripe: Stripe;

  constructor(
    private configService: ConfigService<AllConfigType>,
    private usersService: UsersService,
    private subscriptionsService: SubscriptionsService,
    private keywordsService: KeywordsService,
    private ordersService: OrdersService,
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
    const foundUser = await this.usersService.findOne({
      id: user.id,
    });

    const existingKeyword = await this.keywordsService.findOne({
      letters: createCheckoutSessionDto?.letters,
    });
    if (existingKeyword) {
      throw new ConflictException('Keyword already exists');
    }

    const frontendURL = this.configService.get('app').frontendDomain;
    const checkoutSession = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      success_url: `${frontendURL}/payment?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendURL}/payment?sessionId={CHECKOUT_SESSION_ID}`,
      customer: foundUser?.stripeCustomerId || '',
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

    const newOrder = await this.ordersService.create({
      user: foundUser as User,
      keyword: createCheckoutSessionDto?.letters || '',
      total: (checkoutSession?.amount_total || 0) / 100,
      subTotal: (checkoutSession?.amount_subtotal || 0) / 100,
      checkoutSessionId: checkoutSession.id as string,
      discount: checkoutSession.total_details?.amount_discount || 0,
      fulfilmentStatus: checkoutSession.payment_status,
    });
    return { ...checkoutSession, order: newOrder };
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

  async createNewStripeSubscription(
    createSubscriptionDto: CreateSubscriptionDto,
  ) {
    const foundUser = await this.usersService.findOne({
      stripeCustomerId: createSubscriptionDto?.stripeCustomerId,
    });
    await this.subscriptionsService.create({
      user: foundUser as User,
      stripeSubscriptionId: createSubscriptionDto.subscriptionId,
      stripeSubscriptionStatus: createSubscriptionDto.subscriptionStatus,
      purchaseDate: new Date(createSubscriptionDto.purchaseDate * 1000),
      amount: createSubscriptionDto.amount,
    });
  }

  async updateStripeSubscription(updateSubscriptionDto: UpdateSubscriptionDto) {
    const subscription = (await this.subscriptionsService.findOne({
      stripeSubscriptionId: updateSubscriptionDto.subscriptionId,
    })) as Subscription;

    const order = (await this.ordersService.findOne({
      keyword: subscription?.letters as string,
    })) as Order;

    const keyword = (await this.keywordsService.findOne({
      letters: order?.keyword as string,
    })) as Keyword;
    console.log(keyword);

    subscription.keyword = keyword;
    subscription.stripeSubscriptionStatus =
      updateSubscriptionDto.subscriptionStatus as string;
    subscription.renewalDate = new Date(
      (updateSubscriptionDto.renewalDate as number) * 1000,
    );
    subscription.duration = updateSubscriptionDto.duration as string;
    await subscription?.save();

    order.subscriptionId = updateSubscriptionDto.subscriptionId as string;
    await order.save();
  }

  async updateOrderAndCreateKeyword(customerId: string, status: string) {
    const foundUser = await this.usersService.findOne({
      stripeCustomerId: customerId,
    });
    if (status === 'paid') {
      const order = (await this.ordersService.findOne({
        user: { id: foundUser?.id },
      })) as Order;

      order.fulfilmentStatus = status;
      await order.save();

      await this.keywordsService.create({
        user: order?.user as User,
        letters: order?.keyword as string,
        price: order?.total as number,
      });
    }
  }

  //  Process Events returned from stripe webhooks event
  async processEvent(event: Stripe.Event) {
    switch (event.type) {
      case 'checkout.session.created':
        // Fulfill the purchase...
        break;
      case 'checkout.session.completed':
        // Fulfill the purchase...
        break;
      case 'invoice.paid':
        const invoice = event.data.object as Stripe.Invoice;
        // Fulfill the purchase...
        await this.updateOrderAndCreateKeyword(
          invoice?.customer as string,
          invoice.status as string,
        );
        break;
      case 'invoice.payment_failed':
        const invoicePaymentFailed = event.data.object as Stripe.Invoice;
        // Send notification to customer...
        console.log(invoicePaymentFailed);
        break;
      case 'customer.subscription.created':
        const subscriptionCreated = event.data.object as Stripe.Subscription;
        // Send notification to customer...
        await this.createNewStripeSubscription({
          stripeCustomerId: subscriptionCreated.customer as string,
          amount:
            (subscriptionCreated?.items?.data[0].price?.unit_amount || 0) /
              100 || 0,
          subscriptionId: subscriptionCreated.id as string,
          subscriptionStatus: subscriptionCreated.status as string,
          purchaseDate: subscriptionCreated.created as number,
        });
        console.log('customer.subscription.created');
        break;
      case 'customer.subscription.updated':
        const subscriptionUpdated = event.data.object as Stripe.Subscription;
        // Send notification to customer...
        await this.updateStripeSubscription({
          stripeCustomerId: subscriptionUpdated.customer as string,
          subscriptionId: subscriptionUpdated.id as string,
          subscriptionStatus: subscriptionUpdated.status as string,
          renewalDate: subscriptionUpdated.current_period_end as number,
          duration:
            subscriptionUpdated?.items?.data[0]?.price?.recurring?.interval,
        });
        console.log('customer.subscription.updated');
        break;
      case 'customer.subscription.deleted':
        const subscriptionDeleted = event.data.object as Stripe.Subscription;
        // Send notification to customer...
        console.log('subscriptionDeleted', subscriptionDeleted);
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  }
}
