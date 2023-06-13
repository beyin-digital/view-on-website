import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OrdersService } from 'src/orders/orders.service';
import { StripeService } from 'src/stripe/stripe.service';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { InitiatePaymentDto } from './dto/initiate-payment.dto';
import { KeywordsService } from 'src/keywords/keywords.service';

@Injectable()
export class PaymentService {
  constructor(
    private readonly usersService: UsersService,
    private readonly stripeService: StripeService,
    private readonly ordersService: OrdersService,
    private readonly subscriptionsService: SubscriptionsService,
    private readonly keywordsservice: KeywordsService,
  ) {}

  async intiatePaymentProcess(
    user: User,
    lang: string,
    intiatePaymentDto: InitiatePaymentDto,
  ) {
    console.log(lang);
    const foundUser = await this.usersService.findOne({
      id: user.id,
    });
    const checkExistingKeyword = await this.keywordsservice.findOne({
      letters: intiatePaymentDto.letters,
    });

    if (checkExistingKeyword) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          errors: {
            oldPassword: 'keyword_already_exists',
          },
        },
        HttpStatus.CONFLICT,
      );
    }
    const checkoutSession = await this.stripeService.createCheckoutSession({
      letters: intiatePaymentDto.letters,
      interval: intiatePaymentDto.interval,
      stripeCustomerId: foundUser?.stripeCustomerId as string,
      sublink: intiatePaymentDto.sublink,
      lang,
    });

    await this.ordersService.create({
      checkoutSessionId: checkoutSession.id,
      amount: checkoutSession.amount_total,
      status: checkoutSession.payment_status,
      user: foundUser as User,
    });

    return { url: checkoutSession.url };
  }

  async unsubscribe(user: User, id: number) {
    const foundSubscription = await this.subscriptionsService.findOne({
      id: id,
      user: { id: user.id },
    });
    const subscription = await this.stripeService.cancelSubscription(
      foundSubscription?.stripeSubscriptionId as string,
    );
    return subscription;
  }
}
