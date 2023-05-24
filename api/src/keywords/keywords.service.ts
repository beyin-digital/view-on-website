import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Keyword } from './entities/keyword.entity';
import { DeepPartial, Repository } from 'typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { User } from 'src/users/entities/user.entity';
import slugify from 'slugify';
@Injectable()
export class KeywordsService {
  constructor(
    @InjectRepository(Keyword)
    private keywordsRepository: Repository<Keyword>,
  ) {}

  async create(data: DeepPartial<Keyword>): Promise<Keyword> {
    const checkExistingKeyword = await this.findOne({
      slug: slugify(data.letters as string, {
        lower: true,
      }),
    });

    if (checkExistingKeyword) {
      throw new ConflictException('Keyword already exists');
    }

    return this.keywordsRepository.save(
      this.keywordsRepository.create({
        user: data.user as User,
        ...data,
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

  findOne(fields: EntityCondition<Keyword>): Promise<NullableType<Keyword>> {
    return this.keywordsRepository.findOne({
      where: fields,
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

    return await keyword.save();
  }

  async softDelete(id: number): Promise<void> {
    await this.keywordsRepository.softDelete(id);
  }
}
