import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { DeepPartial, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { NullableType } from '../utils/types/nullable.type';
import { Cron } from '@nestjs/schedule';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private mailService: MailService,
  ) {}

  create(createProfileDto: CreateUserDto): Promise<User> {
    return this.usersRepository.save(
      this.usersRepository.create(createProfileDto),
    );
  }

  findManyWithPagination(
    paginationOptions: IPaginationOptions,
  ): Promise<User[]> {
    return this.usersRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  findOne(fields: EntityCondition<User>): Promise<NullableType<User>> {
    return this.usersRepository.findOne({
      where: fields,
    });
  }

  update(id: number, payload: DeepPartial<User>): Promise<User> {
    return this.usersRepository.save(
      this.usersRepository.create({
        id,
        ...payload,
      }),
    );
  }

  async delete(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  @Cron('45 * * * * *')
  async handleCron() {
    const foundUsers = await this.usersRepository.find({
      where: {
        hasKeywords: false,
        role: {
          id: 2,
        },
      },
    });

    if (foundUsers.length) {
      foundUsers.map(async (user) => {
        // set time to 5 minutes ago
        if (user.createdAt < new Date(Date.now() - 1000 * 60 * 5)) {
          await this.usersRepository.delete(user.id);
        }
      });
    }
  }
}

// new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)
