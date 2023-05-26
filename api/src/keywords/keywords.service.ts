import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Keyword } from './entities/keyword.entity';
import { DeepPartial, Repository } from 'typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { User } from 'src/users/entities/user.entity';
import slugify from 'slugify';
import { CreateKeywordDto } from './dto/create-keyword.dto';
@Injectable()
export class KeywordsService {
  constructor(
    @InjectRepository(Keyword)
    private keywordsRepository: Repository<Keyword>,
  ) {}

  async create(createKeywordDto: CreateKeywordDto): Promise<Keyword> {
    return this.keywordsRepository.save(
      this.keywordsRepository.create({
        ...createKeywordDto,
      }),
    );
  }

  findByHashTag(hashtag: string): Promise<any> {
    return this.keywordsRepository.findOne({
      where: {
        slug: slugify(hashtag, {
          lower: true,
        }),
      },
    });
  }

  checkPremiumKeyword(): Promise<any> {
    return this.keywordsRepository.query(
      `SELECT * FROM keyword WHERE "isPremium" = true AND LENGTH(letters) < 2`,
    );
  }

  findOne(fields: EntityCondition<Keyword>): Promise<NullableType<Keyword>> {
    return this.keywordsRepository.findOne({
      where: fields,
      relations: {
        subscription: true,
      },
    });
  }

  findManyWithPagination(
    paginationOptions: IPaginationOptions,
    user?: User,
  ): Promise<Keyword[]> {
    if (user) {
      return this.keywordsRepository.find({
        where: {
          user: { id: user.id },
        },
        relations: {
          subscription: true,
        },
        skip: (paginationOptions.page - 1) * paginationOptions.limit,
        take: paginationOptions.limit,
      });
    }
    return this.keywordsRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  async update(id: number, payload: DeepPartial<Keyword>): Promise<Keyword> {
    const keyword = (await this.keywordsRepository.findOne({
      where: {
        id,
      },
    })) as Keyword;

    keyword.sublink = payload.sublink || keyword.sublink;
    keyword.price = payload.price || keyword.price;
    keyword.location = payload.location || (keyword.location as any);
    keyword.organisation = payload.organisation || keyword.organisation;
    return await keyword.save();
  }

  async softDelete(id: number): Promise<void> {
    await this.keywordsRepository.softDelete(id);
  }
}
