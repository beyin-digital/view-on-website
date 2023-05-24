import {
  Injectable,
  //  UnauthorizedException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KeywordViewCount } from './entities/keyword-count.entity';
import { Repository } from 'typeorm';
import { Keyword } from 'src/keywords/entities/keyword.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(KeywordViewCount)
    private keywordCountRepository: Repository<KeywordViewCount>,
    @InjectRepository(Keyword)
    private keywordsRepository: Repository<Keyword>,
  ) {}

  async createNewKeywordAnalyticsEntry(keyword: string): Promise<any> {
    const slug = keyword.toLowerCase().replace(/ /g, '-');
    const foundKeyword = await this.keywordsRepository.findOne({
      where: {
        slug,
      },
    });
    if (foundKeyword) {
      return this.keywordCountRepository.save(
        this.keywordCountRepository.create({
          keyword: foundKeyword as Keyword,
        }),
      );
    }
  }

  async getIndividualKeywordAnalytics(keyword: any, user?: User) {
    const slug = keyword.toLowerCase().replace(/ /g, '-');
    const keywordCount = await this.keywordCountRepository.find({
      where: {
        keyword: { slug: slug },
      },
    });
    console.log(user);
    console.log(keywordCount);

    return keywordCount;
  }
}
