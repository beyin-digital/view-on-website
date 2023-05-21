import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { DeepPartial, Repository } from 'typeorm';
import { Plan } from './entities/plan.entity';
import { NullableType } from '../utils/types/nullable.type';

@Injectable()
export class PlansService {
  constructor(
    @InjectRepository(Plan)
    private plansRepository: Repository<Plan>,
  ) {}

  create(data: DeepPartial<Plan>): Promise<any> {
    return this.plansRepository.save(this.plansRepository.create(data));
  }

  findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<Plan[]> {
    return this.plansRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  findOne(fields: EntityCondition<Plan>): Promise<NullableType<Plan>> {
    return this.plansRepository.findOne({
      where: fields,
    });
  }

  update(id: number, payload: DeepPartial<Plan>): Promise<Plan> {
    return this.plansRepository.save(
      this.plansRepository.create({
        id,
        ...payload,
      }),
    );
  }

  async softDelete(id: number): Promise<void> {
    await this.plansRepository.softDelete(id);
  }
}
