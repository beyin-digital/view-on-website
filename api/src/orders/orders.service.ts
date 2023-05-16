import { Injectable } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { NullableType } from 'src/utils/types/nullable.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const existingOrder = await this.findOne({
      keyword: createOrderDto.keyword,
    });
    if (existingOrder) {
      throw new Error('Order already exists');
    }

    return this.ordersRepository.save(
      this.ordersRepository.create(createOrderDto),
    );
  }

  findOne(fields: EntityCondition<Order>): Promise<NullableType<Order>> {
    return this.ordersRepository.findOne({
      where: fields,
    });
  }

  findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<Order[]> {
    return this.ordersRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  update(id: number, payload: DeepPartial<Order>): Promise<Order> {
    return this.ordersRepository.save(
      this.ordersRepository.create({
        id,
        ...payload,
      }),
    );
  }

  async softDelete(id: number): Promise<void> {
    await this.ordersRepository.softDelete(id);
  }
}
