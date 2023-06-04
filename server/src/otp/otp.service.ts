import { Injectable } from '@nestjs/common';
import { CreateOtpDto } from './dto/create-otp.dto';
import { Otp } from './entities/otp.entity';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';

@Injectable()
export class OtpService {
  constructor(
    @InjectRepository(Otp)
    private otpsRepository: Repository<Otp>,
  ) {}

  create(createOtpDto: CreateOtpDto): Promise<Otp> {
    return this.otpsRepository.save(this.otpsRepository.create(createOtpDto));
  }

  findAll() {
    return `This action returns all otp`;
  }

  findOne(fields: EntityCondition<Otp>): Promise<NullableType<Otp>> {
    return this.otpsRepository.findOne({
      where: fields,
    });
  }

  update(id: number, payload: DeepPartial<Otp>) {
    return this.otpsRepository.save(
      this.otpsRepository.create({
        id,
        ...payload,
      }),
    );
  }

  remove(id: number) {
    return `This action removes a #${id} otp`;
  }
}
