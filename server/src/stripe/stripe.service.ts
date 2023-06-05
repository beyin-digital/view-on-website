import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from 'src/config/config.type';
import Stripe from 'stripe';
import { CreateStripeCustomerDto } from './dto/create-stripe-customer.dto';
import { CreateCheckoutSessionDto } from './dto/create-stripe-checkout-session';
import { OrdersService } from 'src/orders/orders.service';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { KeywordsService } from 'src/keywords/keywords.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Keyword } from 'src/keywords/entities/keyword.entity';

@Injectable()
export class StripeService {
  public readonly stripe: Stripe;
  constructor(
    private configService: ConfigService<AllConfigType>,
    private ordersService: OrdersService,
    private subscriptionsService: SubscriptionsService,
    private keywordsService: KeywordsService,
    private usersService: UsersService,
  ) {
    this.stripe = new Stripe(this.configService.get('stripe').secretKey, {
      apiVersion: '2022-11-15',
    });
  }

  async createStripeCustomer(createStripeCustomerDto: CreateStripeCustomerDto) {
    return await this.stripe.customers.create({
      email: createStripeCustomerDto.email,
      name: createStripeCustomerDto.fullName,
    });
  }

  async cancelSubscription(stripeSubscriptionId: string) {
    return await this.stripe.subscriptions.del(stripeSubscriptionId);
  }

  async createCheckoutSession(
    createCheckoutSessionDto: CreateCheckoutSessionDto,
  ) {
    const frontendDomain = this.configService.get('app').frontendDomain;
    let checkoutSession: any;
    const wordLength = createCheckoutSessionDto.letters.length;
    const premiumPrice =
      wordLength < 2
        ? 999999
        : wordLength >= 2 && wordLength < 3
        ? 100000
        : wordLength === 3
        ? 10000
        : null;

    if (premiumPrice === null) {
      const recurring: Stripe.Checkout.SessionCreateParams.LineItem.PriceData.Recurring =
        createCheckoutSessionDto?.interval === 'month'
          ? { interval: 'month', interval_count: 1 }
          : createCheckoutSessionDto?.interval === '6-months'
          ? { interval: 'month', interval_count: 6 }
          : { interval: 'year', interval_count: 1 };
      const regularSubsPricing =
        createCheckoutSessionDto?.interval === 'month'
          ? 99
          : createCheckoutSessionDto?.interval === '6-months'
          ? 299
          : 399;

      checkoutSession = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer: createCheckoutSessionDto.stripeCustomerId,
        metadata: {
          letters: createCheckoutSessionDto.letters,
          sublink: createCheckoutSessionDto.sublink,
        },
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: createCheckoutSessionDto.letters,
              },
              unit_amount: regularSubsPricing * 100,
              recurring,
            },
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${frontendDomain}/en/dashboard`,
        cancel_url: `${frontendDomain}/en/dashboard`,
      });
    } else {
      checkoutSession = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer: createCheckoutSessionDto.stripeCustomerId,
        metadata: {
          letters: createCheckoutSessionDto.letters,
          sublink: createCheckoutSessionDto.sublink,
        },
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `Rights to use the #${createCheckoutSessionDto.letters}`,
              },
              unit_amount: (premiumPrice || 0) * 100,
            },

            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${frontendDomain}/en/dashboard`,
        cancel_url: `${frontendDomain}/en/dashboard`,
      });
    }

    return checkoutSession;
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

  async updateOrderStatus(
    checkoutSessionId: string,
    status: string,
    metaData: any,
    subscriptionId: string,
    stripeCustomerId: string,
    purchaseAmount: number,
    purchaseDate: number,
    invoiceId: string,
  ) {
    if (status === 'paid') {
      const order = (await this.ordersService.findOne({
        checkoutSessionId,
      })) as Order;

      order.status = 'paid';
      await order?.save();

      const foundUser = (await this.usersService.findOne({
        stripeCustomerId,
      })) as User;

      const subscription = await this.subscriptionsService.create({
        letters: metaData.letters,
        stripeSubscriptionId: subscriptionId,
        user: foundUser as User,
        purchaseAmount: purchaseAmount / 100,
        purchaseDate: new Date(purchaseDate * 1000),
        invoiceId,
      });

      await this.keywordsService.create({
        letters: metaData.letters,
        sublink: metaData.sublink,
        user: foundUser as User,
        subscription: subscription,
      });

      foundUser.hasKeywords = true || foundUser.hasKeywords;
      await foundUser.save();
    }
  }

  async updateSubscriptionAndKeyword({
    subscriptionId,
    status,
    purchaseDate,
    renewalAmount,
    renewalDate,
    intervalCount,
    interval,
    invoiceId,
  }: {
    subscriptionId?: string;
    status?: string;
    purchaseDate?: number;
    renewalAmount?: number;
    renewalDate?: number;
    intervalCount?: number;
    interval?: string;
    invoiceId?: string;
  }) {
    const subscription = (await this.subscriptionsService.findOne({
      stripeSubscriptionId: subscriptionId,
    })) as Subscription;

    const keyword = (await this.keywordsService.findOne({
      subscription: { stripeSubscriptionId: subscriptionId },
    })) as Keyword;

    const user = (await this.usersService.findOne({
      id: subscription.user.id,
    })) as User;

    if (status === 'active') {
      subscription.stripeSubscriptionStatus =
        status || subscription.stripeSubscriptionStatus;
      subscription.purchaseDate =
        new Date((purchaseDate as number) * 1000) || subscription.purchaseDate;
      subscription.renewalAmount =
        (renewalAmount as number) / 100 || subscription.renewalAmount;
      subscription.renewalDate =
        new Date((renewalDate as number) * 1000) || subscription.renewalDate;
      subscription.duration =
        intervalCount === 1 && interval === 'month'
          ? 'monthly'
          : intervalCount === 6
          ? '6 months'
          : 'year' || subscription.duration;
      subscription.invoiceId = invoiceId || subscription.invoiceId;
      keyword.renewalDate = new Date((renewalDate as number) * 1000);
      keyword.purchaseDate = new Date((purchaseDate as number) * 1000);
      await subscription?.save();
      await keyword.save();
    } else if (status === 'canceled') {
      await this.subscriptionsService.delete(subscription.id);
      await this.keywordsService.delete(keyword.id);
      const keywordsCount = await this.keywordsService.count({
        user: { id: user.id },
      });

      if (keywordsCount === 0) {
        user.hasKeywords = false;
        await user.save();
      }
    }
  }

  async processEvent(event: Stripe.Event) {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        await this.updateOrderStatus(
          session.id,
          session.payment_status,
          session.metadata,
          session.subscription as string,
          session.customer as string,
          session.amount_total as number,
          session.created as number,
          session.invoice as string,
        );
        break;
      case 'customer.subscription.updated':
        const subscription = event.data.object as any;

        await this.updateSubscriptionAndKeyword({
          subscriptionId: subscription.id,
          purchaseDate: subscription.current_period_start as number,
          renewalAmount: subscription.plan?.amount as number,
          renewalDate: subscription.current_period_end as number,
          status: subscription.status,
          intervalCount: subscription.plan?.interval_count as number,
          interval: subscription.plan?.interval as string,
          invoiceId: subscription.latest_invoice as string,
        });
        break;
      case 'customer.subscription.deleted':
        const subscriptionDeleted = event.data.object as any;
        await this.updateSubscriptionAndKeyword({
          subscriptionId: subscriptionDeleted.id,
          status: subscriptionDeleted.status,
        });
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  }
}
