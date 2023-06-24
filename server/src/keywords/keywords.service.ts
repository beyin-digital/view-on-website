import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { DeepPartial, Repository } from 'typeorm';
import { CreateKeywordDto } from './dto/create-keyword.dto';
import { Keyword } from './entities/keyword.entity';
import { NullableType } from '../utils/types/nullable.type';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class KeywordsService {
  constructor(
    @InjectRepository(Keyword)
    private keywordsRepository: Repository<Keyword>,
  ) {}

  create(createKeywordDto: CreateKeywordDto): Promise<Keyword> {
    return this.keywordsRepository.save(
      this.keywordsRepository.create(createKeywordDto),
    );
  }

  findManyWithPagination(
    paginationOptions: IPaginationOptions,
    user?: User,
  ): Promise<any[]> {
    return this.keywordsRepository.find({
      where: {
        user: { id: user?.id },
      },
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
      order: {
        id: 'asc',
      },
    });
  }

  findOne(fields: EntityCondition<Keyword>): Promise<NullableType<Keyword>> {
    return this.keywordsRepository.findOne({
      where: fields,
    });
  }

  findAllSingleLetterKeywords() {
    return this.keywordsRepository.query(`
        SELECT slug FROM keyword WHERE LENGTH(slug) = 1;        
    `);
  }

  update(id: number, payload: DeepPartial<Keyword>): Promise<Keyword> {
    return this.keywordsRepository.save(
      this.keywordsRepository.create({
        id,
        ...payload,
      }),
    );
  }

  async delete(id: number): Promise<void> {
    await this.keywordsRepository.delete(id);
  }

  async count(fields: EntityCondition<Keyword>): Promise<number> {
    return this.keywordsRepository.count({
      where: fields,
    });
  }
}
