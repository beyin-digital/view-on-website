import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptions } from 'src/utils/types/find-options.type';
import { DeepPartial, Repository } from 'typeorm';
import { Refresh } from './entities/refresh.entity';
import { NullableType } from '../utils/types/nullable.type';

@Injectable()
export class RefreshService {
  constructor(
    @InjectRepository(Refresh)
    private readonly refreshRepository: Repository<Refresh>,
  ) {}

  async findOne(options: FindOptions<Refresh>): Promise<NullableType<Refresh>> {
    return this.refreshRepository.findOne({
      where: options.where,
    });
  }

  async findMany(options: FindOptions<Refresh>): Promise<Refresh[]> {
    return this.refreshRepository.find({
      where: options.where,
    });
  }

  async create(data: DeepPartial<Refresh>): Promise<Refresh> {
    return this.refreshRepository.save(this.refreshRepository.create(data));
  }

  async softDelete(id: number): Promise<void> {
    await this.refreshRepository.softDelete(id);
  }
}
