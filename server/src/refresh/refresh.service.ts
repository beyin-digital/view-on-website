import { Injectable } from '@nestjs/common';
import { CreateRefreshDto } from './dto/create-refresh.dto';
import { Refresh } from './entities/refresh.entity';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';

@Injectable()
export class RefreshService {
  constructor(
    @InjectRepository(Refresh)
    private refreshesRepository: Repository<Refresh>,
  ) {}

  create(createRefreshDto: CreateRefreshDto): Promise<Refresh> {
    return this.refreshesRepository.save(
      this.refreshesRepository.create(createRefreshDto),
    );
  }

  findAll() {
    return `This action returns all otp`;
  }

  findOne(fields: EntityCondition<Refresh>): Promise<NullableType<Refresh>> {
    return this.refreshesRepository.findOne({
      where: fields,
    });
  }

  update(id: number, payload: DeepPartial<Refresh>) {
    return this.refreshesRepository.save(
      this.refreshesRepository.create({
        id,
        ...payload,
      }),
    );
  }

  remove(id: number) {
    return `This action removes a #${id} otp`;
  }
}
