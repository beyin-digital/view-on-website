import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { DeepPartial, Repository } from 'typeorm';
import { NullableType } from 'src/utils/types/nullable.type';
import { EntityCondition } from 'src/utils/types/entity-condition.type';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderssRepository: Repository<Order>,
  ) {}
  create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderssRepository.save(
      this.orderssRepository.create(createOrderDto),
    );
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(fields: EntityCondition<Order>): Promise<NullableType<Order>> {
    return this.orderssRepository.findOne({
      where: fields,
    });
  }

  update(id: number, payload: DeepPartial<Order>): Promise<Order> {
    return this.orderssRepository.save(
      this.orderssRepository.create({
        id,
        ...payload,
      }),
    );
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
