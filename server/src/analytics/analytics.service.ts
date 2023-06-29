import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KeywordViewCount } from './entities/keyword-view.entity';
import { Repository } from 'typeorm';
import { Keyword } from 'src/keywords/entities/keyword.entity';
// import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { ConfigService } from '@nestjs/config';
import { Socket } from 'socket.io';
import { DateTime } from 'luxon';

// import { WsException } from '@nestjs/websockets';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(KeywordViewCount)
    private keywordViewCountRepository: Repository<KeywordViewCount>,
    @InjectRepository(Keyword)
    private keywordsRepository: Repository<Keyword>,
    private jwtService: JwtService,
    private usersService: UsersService,
    private configService: ConfigService,
  ) {}

  async getUserFromSocket(socket: Socket) {
    const user = await this.getUserFromAuthenticationToken(
      socket.handshake.auth?.token,
    );

    return { user, token: socket.handshake.auth?.token };
  }

  async getUserFromAuthenticationToken(token: string) {
    const payload = this.jwtService.verify(token);
    if (payload.id) {
      return await this.usersService.findOne({ id: payload.id });
    }
  }
  async createNewKeywordAnalyticsEntry(id: number): Promise<any> {
    const foundKeyword = await this.keywordsRepository.findOne({
      where: {
        id,
      },
    });

    if (foundKeyword) {
      return this.keywordViewCountRepository.save(
        this.keywordViewCountRepository.create({
          keyword: foundKeyword as Keyword,
          createdAt: DateTime.local().setZone(foundKeyword.timezone).toJSDate(),
        }),
      );
    }
  }

  async getIndividualKeywordAnalytics(timezone: string, id?: number) {
    const keyword = await this.keywordsRepository.findOne({
      where: {
        id,
      },
    });

    const keywordCount = await this.keywordViewCountRepository.find({
      where: {
        keyword: { id: keyword?.id },
      },
    });

    if (keywordCount.length === 0) {
      return {
        keywordId: keyword?.id,
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
      keywordId: keyword?.id,
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
      totalDailyVisitsByHoursOfTheDay: (() => {
        const hoursArray = Array.from({ length: 24 }, (_, hour) => hour);
        const currentDate = DateTime.local().setZone(keyword?.timezone);
        const localOffset = currentDate.offset;

        const last24HoursStart = currentDate.minus({ hours: 24 });

        return hoursArray.map((hour) => {
          const visitCounts = keywordCount.filter((count) => {
            const countDate = DateTime.fromISO(
              count.createdAt.toISOString(),
            ).setZone(count.keyword.timezone);

            // Check if the countDate is within the last 24 hours
            if (countDate < last24HoursStart || countDate >= currentDate) {
              return false; // Skip this record if it's outside the last 24 hours
            }

            const countOffset = countDate.offset;
            const countHour =
              (countDate.hour + countOffset - localOffset + 24) % 24;
            return countHour === hour;
          }).length;

          return {
            x: hour + ':00',
            y: visitCounts,
          };
        });
      })(),
      totalVisitsByMonthsOfTheYear: [...Array(12).keys()].map((month) => {
        const currentMonth = DateTime.local()
          .minus({ months: 11 })
          .startOf('month')
          .plus({ months: month });

        return {
          x: currentMonth.toLocaleString({ month: 'short' }),
          y: keywordCount.filter((count) => {
            const countDate = DateTime.fromISO(
              count.createdAt.toISOString(),
            ).setZone('utc');
            return (
              countDate.month === currentMonth.month &&
              countDate.year === currentMonth.year
            );
          }).length,
        };
      }),
      totalVisitsByDaysOfTheWeek: (() => {
        const currentDate = DateTime.local();
        const last7Days = Array.from({ length: 7 }, (_, i) =>
          currentDate.minus({ days: i }),
        );

        return last7Days.map((day) => {
          const visitCounts = keywordCount.filter((count) => {
            const countDate = DateTime.fromJSDate(count.createdAt);
            return countDate.weekday === day.weekday;
          }).length;

          return {
            x: day.toFormat('EEE'),
            y: visitCounts,
          };
        });
      })(),
      totalVisitsByDaysOfTheMonth: (() => {
        const currentDate = DateTime.local();
        const currentMonthDays = currentDate.daysInMonth;

        const earliestRecordDate = DateTime.local(
          currentDate.year,
          currentDate.month,
          1,
        ).startOf('day');

        return Array.from({ length: currentMonthDays as any }, (_, day) => {
          const dayOfMonth = day + 1;
          const currentDayDate = earliestRecordDate.plus({ days: day });

          const visitCounts = keywordCount.filter((count) => {
            const countDate = DateTime.fromJSDate(count.createdAt);
            return countDate.hasSame(currentDayDate, 'day');
          }).length;

          return {
            x: dayOfMonth,
            y: visitCounts,
          };
        });
      })(),
    };
  }
}
