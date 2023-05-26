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
import { UnsubscribeDto } from './dto/unsubscribe.dto';
import { MailService } from 'src/mail/mail.service';
import slugify from 'slugify';

@Injectable()
export class StripeService {
  public readonly stripe: Stripe;

  constructor(
    private configService: ConfigService<AllConfigType>,
    private usersService: UsersService,
    private subscriptionsService: SubscriptionsService,
    private keywordsService: KeywordsService,
    private ordersService: OrdersService,
    private mailService: MailService,
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
    let createdCheckoutSession: Stripe.Checkout.Session;
    const foundUser = await this.usersService.findOne({
      id: user.id,
    });
    foundUser;

    const existingKeyword = await this.keywordsService.findOne({
      letters: createCheckoutSessionDto?.letters,
    });
    if (existingKeyword) {
      throw new ConflictException('Keyword already exists');
    }

    const frontendURL = this.configService.get('app').frontendDomain;

    if ((createCheckoutSessionDto?.letters?.length as number) > 3) {
      const normalCheckoutSession = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        success_url: `${frontendURL}/dashboard/subscriptions`,
        cancel_url: `${frontendURL}/dashboard/subscriptions`,
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
                interval:
                  createCheckoutSessionDto?.interval === 'year'
                    ? 'year'
                    : 'month',
                interval_count:
                  createCheckoutSessionDto?.price === 399 ||
                  createCheckoutSessionDto?.price === 99
                    ? 1
                    : 6,
              },
              unit_amount: (createCheckoutSessionDto?.price || 0) * 100,
            },
            quantity: 1,
          },
        ],
      });
      createdCheckoutSession = normalCheckoutSession;
    } else {
      const premiumCheckoutSession = await this.stripe.checkout.sessions.create(
        {
          payment_method_types: ['card'],
          success_url: `${frontendURL}/dashboard/subscriptions`,
          cancel_url: `${frontendURL}/dashboard/subscriptions`,
          customer: foundUser?.stripeCustomerId || '',
          mode: 'subscription',
          locale: 'en',
          line_items: [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: `#${createCheckoutSessionDto?.letters}` || '',
                  description: `Purchase of the rights to use the #${
                    createCheckoutSessionDto?.letters || ''
                  } premium hashtag`,
                },
                unit_amount:
                  (createCheckoutSessionDto?.letters.length as number) <= 1
                    ? 999995.35 * 100
                    : (createCheckoutSessionDto?.letters.length as number) === 2
                    ? 100000 * 100
                    : 10000 * 100,
              },
              quantity: 1,
            },
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: createCheckoutSessionDto?.letters || '',
                  description: `Yearly renewal fee for using the #${
                    createCheckoutSessionDto?.letters || ''
                  } premium hashtag`,
                },
                recurring: {
                  interval: 'year',
                  interval_count: 1,
                },
                unit_amount: 3.65 * 100,
              },
              quantity: 1,
            },
          ],
        },
      );
      createdCheckoutSession = premiumCheckoutSession;
    }

    const keywordExists = await this.keywordsService.findOne({
      slug: slugify(createCheckoutSessionDto?.letters as string, {
        lower: true,
      }),
    });
    if (keywordExists) {
      throw new ConflictException('Keyword already exists');
    }

    const newOrder = await this.ordersService.create({
      invoiceId: createdCheckoutSession.invoice as string,
      user: foundUser as User,
      keyword: createCheckoutSessionDto?.letters || '',
      sublink: createCheckoutSessionDto?.sublink || '',
      total: (createdCheckoutSession?.amount_total || 0) / 100,
      subTotal: (createdCheckoutSession?.amount_subtotal || 0) / 100,
      checkoutSessionId: createdCheckoutSession.id as string,
      discount: createdCheckoutSession.total_details?.amount_discount || 0,
      fulfilmentStatus: createdCheckoutSession.payment_status,
    });
    return { ...createdCheckoutSession, order: newOrder };
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
      stripeSubscriptionId: createSubscriptionDto.stripeSubscriptionId,
      stripeSubscriptionStatus: createSubscriptionDto.subscriptionStatus,
      purchaseDate: new Date(createSubscriptionDto.purchaseDate * 1000),
      price: createSubscriptionDto.price,
    });
  }

  async updateStripeSubscription(updateSubscriptionDto: UpdateSubscriptionDto) {
    const subscription = (await this.subscriptionsService.findOne({
      stripeSubscriptionId: updateSubscriptionDto.subscriptionId,
    })) as Subscription;

    const order = (await this.ordersService.findOne({
      subscriptionId: subscription.stripeSubscriptionId,
    })) as Order;

    const keyword = (await this.keywordsService.findOne({
      letters: order?.keyword as string,
    })) as Keyword;

    subscription.keyword = keyword;
    subscription.letters = keyword.letters;
    subscription.stripeSubscriptionStatus =
      updateSubscriptionDto.subscriptionStatus as string;
    subscription.renewalDate = new Date(
      (updateSubscriptionDto.renewalDate as number) * 1000,
    );
    subscription.duration = updateSubscriptionDto.duration as string;
    subscription.renewalPrice = order.renewalPrice;
    subscription.price = order.total;
    await subscription?.save();

    await this.mailService.paymentConfirmation({
      to: subscription.user.email as string,
      data: {
        amount: order?.total,
        keyword: order?.keyword,
        renewalDate: new Date(subscription?.renewalDate).toLocaleDateString(),
        receiptUrl: order?.invoiceUrl,
        renewalPrice: order?.renewalPrice,
      },
    });
  }

  async updateOrderAndCreateKeyword(
    checkoutSessionId: string,
    invoiceId: string,
    status: string,
    renewalPrice: number,
    subscriptionId: string,
  ) {
    const invoiceDetails = await this.stripe.invoices.retrieve(invoiceId);
    if (status === 'paid') {
      const order = (await this.ordersService.findOne({
        checkoutSessionId,
      })) as Order;

      order.fulfilmentStatus = status;
      order.invoiceUrl = invoiceDetails.hosted_invoice_url as string;
      order.renewalPrice = renewalPrice;
      order.subscriptionId = subscriptionId;
      await order.save();

      await this.keywordsService.create({
        user: order?.user as User,
        letters: order?.keyword as string,
        price: order?.total as number,
        sublink: order?.sublink as string,
      });

      //   await newKeyword.save();
    }
  }

  async unsubscribeFromKeyword(user: User, unsubscribeDto: UnsubscribeDto) {
    try {
      const foundUser = await this.usersService.findOne({
        id: user.id,
      });

      if (!foundUser) {
        throw new ConflictException('User does not exist');
      }

      const foundKeyword = await this.keywordsService.findOne({
        letters: unsubscribeDto.keyword,
      });

      if (foundKeyword?.user?.id !== user.id) {
        throw new ConflictException(
          'You are not authorized to unsubscribe from this keyword',
        );
      }

      const foundSubscription = await this.subscriptionsService.findOne({
        letters: unsubscribeDto.subscriptionId,
      });

      if (foundKeyword) {
        await this.stripe.subscriptions.cancel(
          foundSubscription?.stripeSubscriptionId as string,
        );
        await foundKeyword.remove();
      }

      if (foundSubscription) {
        await foundSubscription.remove();
      }
    } catch (error) {}
  }

  //  Process Events returned from stripe webhooks event
  async processEvent(event: Stripe.Event) {
    switch (event.type) {
      case 'checkout.session.created':
        // Fulfill the purchase...
        break;
      case 'checkout.session.completed':
        // Fulfill the purchase...
        const checkoutSession = event.data.object as Stripe.Checkout.Session;
        const renewalPrice =
          (checkoutSession?.amount_total as number) > 399 * 100
            ? 3.65
            : (checkoutSession?.amount_total as number) / 100;
        await this.updateOrderAndCreateKeyword(
          checkoutSession?.id as string,
          checkoutSession.invoice as string,
          checkoutSession.payment_status as string,
          renewalPrice,
          checkoutSession.subscription as string,
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
          price:
            (subscriptionCreated?.items?.data[0].price?.unit_amount || 0) /
              100 || 0,
          stripeSubscriptionId: subscriptionCreated.id as string,
          subscriptionStatus: subscriptionCreated.status as string,
          purchaseDate: subscriptionCreated.created as number,
        });
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
