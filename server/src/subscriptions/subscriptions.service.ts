import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscription } from './entities/subscription.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private readonly subscriptionsRepository: Repository<Subscription>,
  ) {}

  create(createOrderDto: CreateSubscriptionDto): Promise<Subscription> {
    return this.subscriptionsRepository.save(
      this.subscriptionsRepository.create(createOrderDto),
    );
  }

  findManyWithPagination(
    paginationOptions: IPaginationOptions,
    user?: User,
  ): Promise<Subscription[]> {
    return this.subscriptionsRepository.find({
      where: {
        user: { id: user?.id },
        stripeSubscriptionStatus: 'active',
      },
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  findOne(
    fields: EntityCondition<Subscription>,
  ): Promise<NullableType<Subscription>> {
    return this.subscriptionsRepository.findOne({
      where: fields,
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

  async delete(id: number): Promise<void> {
    await this.subscriptionsRepository.delete(id);
  }
}
