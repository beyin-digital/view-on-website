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
    if (!user) {
      console.log('not founf');
      //   throw new WsException('Invalid credentials.');
    }
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
        }),
      );
    }
  }

  async getIndividualKeywordAnalytics(id?: number) {
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