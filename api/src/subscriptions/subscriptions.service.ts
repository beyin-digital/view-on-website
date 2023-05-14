import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscription } from './entities/subscription.entity';
import { DeepPartial, Repository } from 'typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { StripeService } from 'src/stripe/stripe.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { PaySubscriptionDto } from './dto/pay-subscription.dto';
import { KeywordsService } from 'src/keywords/keywords.service';
@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionsRepository: Repository<Subscription>,
    private stripeService: StripeService,
    private usersService: UsersService,
    private readonly keywordService: KeywordsService,
  ) {}

  async paySubscription(user: User, paySubscriptionDto: PaySubscriptionDto) {
    const currentUser = await this.usersService.findOne({
      id: user.id,
    });

    const keyword = await this.keywordService.findOne({
      id: paySubscriptionDto.keywordId,
    });
    const subscriptionCheckout = await this.stripeService.createCheckoutSession(
      currentUser as User,
      {
        customerId: currentUser?.stripeCustomerId as string,
        letters: keyword?.letters as string,
        price: keyword?.price as number,
      },
    );

    return { ...subscriptionCheckout };
  }

  create(createSubscriptionDto: CreateSubscriptionDto): Promise<Subscription> {
    return this.subscriptionsRepository.save(
      this.subscriptionsRepository.create(createSubscriptionDto),
    );
  }

  findOne(
    fields: EntityCondition<Subscription>,
  ): Promise<NullableType<Subscription>> {
    return this.subscriptionsRepository.findOne({
      where: fields,
    });
  }

  findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<Subscription[]> {
    return this.subscriptionsRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  update(
    id: number,
    payload: DeepPartial<Subscription>,
  ): Promise<Subscription> {
    return this.subscriptionsRepository.save(
      this.subscriptionsRepository.create({
        id,
        ...payload,
      }),
    );
  }

  async softDelete(id: number): Promise<void> {
    await this.subscriptionsRepository.softDelete(id);
  }
}
