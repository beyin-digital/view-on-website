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
          letters: 'VOW',
          slug: slugify('VOW', { lower: true }),
          featured: true,
          sublink: 'https://www.vow.com',
          location: {
            state: 'Abu Dhabi',
            country: 'United Arab Emirates',
            coordinates: {
              lat: 24.4539,
              lng: 54.3773,
            },
          },
          user: {
            id: 1,
          },
        }),
      );
    }
  }
}
