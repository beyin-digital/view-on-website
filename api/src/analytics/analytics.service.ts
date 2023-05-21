import {
  ConflictException,
  Injectable,
  UnauthorizedException,
  //   UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KeywordViewCount } from './entities/keyword-count.entity';
import { Repository } from 'typeorm';
import { Keyword } from 'src/keywords/entities/keyword.entity';
import { User } from 'src/users/entities/user.entity';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { GetAnalyticsDto } from './dto/get-analytics.dto';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(KeywordViewCount)
    private keywordCountRepository: Repository<KeywordViewCount>,
    @InjectRepository(Keyword)
    private keywordsRepository: Repository<Keyword>,
  ) {}

  async createNewKeywordAnalyticsEntry(
    keyword: string,
  ): Promise<KeywordViewCount> {
    const slug = keyword.toLowerCase().replace(/ /g, '-');
    const foundKeyword = await this.keywordsRepository.findOne({
      where: {
        slug,
      },
    });
    if (!foundKeyword) {
      throw new ConflictException('Keyword does not exist');
    }

    return this.keywordCountRepository.save(
      this.keywordCountRepository.create({
        keyword: foundKeyword as Keyword,
      }),
    );
  }

  async getIndividualKeywordAnalytics(
    user: User,
    getAnalyticsDto: GetAnalyticsDto,
    paginationOptions: IPaginationOptions,
  ) {
    const slug = getAnalyticsDto.keyword.toLowerCase().replace(/ /g, '-');
    const keywordCount = await this.keywordCountRepository.find({
      where: {
        keyword: { slug },
      },
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    if (user.role?.id !== 1 || keywordCount[0].keyword?.user?.id !== user.id) {
      throw new UnauthorizedException(
        'You are not authorized to view this data',
      );
    }
    return keywordCount;
  }
}
