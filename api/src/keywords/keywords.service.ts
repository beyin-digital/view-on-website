import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Keyword } from './entities/keyword.entity';
import { DeepPartial, Repository } from 'typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { CreateKeywordDto } from './dto/create-keyword.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class KeywordsService {
  constructor(
    @InjectRepository(Keyword)
    private keywordsRepository: Repository<Keyword>,
    private usersService: UsersService,
  ) {}

  async create(
    user: User,
    createKeywordDto: CreateKeywordDto,
  ): Promise<Keyword> {
    const currentUser = await this.usersService.findOne({
      id: user.id,
    });
    if (!user) {
      throw new Error('User not found');
    }

    const checkExistingKeyword = await this.findOne({
      letters: createKeywordDto.letters,
    });

    if (checkExistingKeyword) {
      throw new Error('Keyword already exists');
    }

    return this.keywordsRepository.save(
      this.keywordsRepository.create({
        user: currentUser as User,
        ...createKeywordDto,
      }),
    );
  }

  findByHashTag(hashtag: string): Promise<Keyword | null> {
    return this.keywordsRepository.findOne({
      where: {
        letters: hashtag as string,
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
  ): Promise<Keyword[]> {
    return this.keywordsRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  update(id: number, payload: DeepPartial<Keyword>): Promise<Keyword> {
    return this.keywordsRepository.save(
      this.keywordsRepository.create({
        id,
        ...payload,
      }),
    );
  }

  async softDelete(id: number): Promise<void> {
    await this.keywordsRepository.softDelete(id);
  }
}
