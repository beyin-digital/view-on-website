import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscription } from './entities/subscription.entity';
import { DeepPartial, Repository } from 'typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { UsersService } from 'src/users/users.service';
import { KeywordsService } from 'src/keywords/keywords.service';
import { User } from 'src/users/entities/user.entity';
@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionsRepository: Repository<Subscription>,
    private usersService: UsersService,
    private keywordService: KeywordsService,
  ) {}

  create(data: DeepPartial<Subscription>): Promise<Subscription> {
    return this.subscriptionsRepository.save(
      this.subscriptionsRepository.create(data),
    );
  }

  findOne(
    fields: EntityCondition<Subscription>,
  ): Promise<NullableType<Subscription>> {
    return this.subscriptionsRepository.findOne({
      where: fields,
    });
  }

  async findManyWithPagination(
    paginationOptions: IPaginationOptions,
    user?: User,
  ): Promise<Subscription[]> {
    if (user) {
      const foundUser = await this.usersService.findOne({
        id: user?.id,
      });

      if (!foundUser) {
        throw new Error('User not found');
      }

      return this.subscriptionsRepository.find({
        where: {
          user: !!foundUser,
        },
        skip: (paginationOptions.page - 1) * paginationOptions.limit,
        take: paginationOptions.limit,
      });
    }
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
