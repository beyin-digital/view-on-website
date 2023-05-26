import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KeywordViewCount } from './entities/keyword-count.entity';
import { Repository } from 'typeorm';
import { Keyword } from 'src/keywords/entities/keyword.entity';
import { UsersService } from 'src/users/users.service';
import slugify from 'slugify';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(KeywordViewCount)
    private keywordCountRepository: Repository<KeywordViewCount>,
    @InjectRepository(Keyword)
    private keywordsRepository: Repository<Keyword>,

    private usersService: UsersService,
  ) {}

  async createNewKeywordAnalyticsEntry(keyword: string): Promise<any> {
    const slug = slugify(keyword, { lower: true });
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

  async getIndividualKeywordAnalytics(keyword: any) {
    const slug = slugify(keyword, { lower: true });
    const keywordCount = await this.keywordCountRepository.find({
      where: {
        keyword: { slug: slug },
      },
    });

    if (keywordCount.length === 0) {
      return {
        totalVisits: 0,
        totalVisitsToday: 0,
        totalDailyVisitsByHoursOfTheDay: [...Array(24).keys()].map((hour) => {
          return {
            x: hour + ':00',
            y: 0,
          };
        }),
        totalVisitsByMonthsOfTheYear: [...Array(12).keys()].map((month) => {
          return {
            x: new Date(0, month).toLocaleString('default', {
              month: 'short',
            }),
            y: 0,
          };
        }),
        totalVisitsByDaysOfTheWeek: [...Array(7).keys()].map((day) => {
          return {
            x: new Date(0, 0, day).toLocaleString('default', {
              weekday: 'short',
            }),
            y: 0,
          };
        }),
        totalVisitsByDaysOfTheMonth: [
          ...Array(
            new Date(
              new Date().getFullYear(),
              new Date().getMonth() + 1,
              0,
            ).getDate(),
          ).keys(),
        ].map((day) => {
          return {
            x: day + 1,
            y: 0,
          };
        }),
      };
    }
    return {
      totalVisits: keywordCount.length,
      totalVisitsToday: keywordCount.filter((count) => {
        const today = new Date();
        const countDate = new Date(count.createdAt);
        return (
          countDate.getDate() === today.getDate() &&
          countDate.getMonth() === today.getMonth() &&
          countDate.getFullYear() === today.getFullYear()
        );
      }).length,
      totalDailyVisitsByHoursOfTheDay: [...Array(24).keys()].map((hour) => {
        const today = new Date();
        const countDate = new Date(keywordCount[0].createdAt);
        return {
          x: hour + ':00',
          y: keywordCount.filter(() => {
            return (
              countDate.getDate() === today.getDate() &&
              countDate.getMonth() === today.getMonth() &&
              countDate.getFullYear() === today.getFullYear() &&
              countDate.getHours() === hour
            );
          }).length,
        };
      }),
      totalVisitsByMonthsOfTheYear: [...Array(12).keys()].map((month) => {
        return {
          x: new Date(0, month).toLocaleString('default', {
            month: 'short',
          }),
          y: keywordCount.filter((count) => {
            const countDate = new Date(count.createdAt);
            return countDate.getMonth() === month;
          }).length,
        };
      }),
      totalVisitsByDaysOfTheWeek: [...Array(7).keys()].map((day) => {
        return {
          x: new Date(0, 0, day).toLocaleString('default', {
            weekday: 'short',
          }),
          y: keywordCount.filter((count) => {
            const countDate = new Date(count.createdAt);
            return countDate.getDay() === day;
          }).length,
        };
      }),
      totalVisitsByDaysOfTheMonth: [
        ...Array(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0,
          ).getDate(),
        ).keys(),
      ].map((day) => {
        return {
          x: day + 1,
          y: keywordCount.filter((count) => {
            const countDate = new Date(count.createdAt);
            return countDate.getDate() === day + 1;
          }).length,
        };
      }),
    };
  }
}
