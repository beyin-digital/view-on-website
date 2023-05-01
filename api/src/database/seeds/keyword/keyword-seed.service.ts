import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Keyword } from 'src/keywords/entities/keyword.entity';
import { Repository } from 'typeorm';
import slugify from 'slugify';

@Injectable()
export class KeywordSeedService {
  constructor(
    @InjectRepository(Keyword)
    private repository: Repository<Keyword>,
  ) {}

  async run() {
    const count = await this.repository.count();

    if (count === 0) {
      await this.repository.save(
        this.repository.create({
          letters: 'Hello world',
          slug: slugify('Hello world', { lower: true }),
          featured: true,
          user: {
            id: 1,
          },
        }),
      );
    }
  }
}
