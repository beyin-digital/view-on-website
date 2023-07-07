/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';
import { AnalyticsService } from './analytics.service';

@WebSocketGateway({
  cors: {
    origin: ['https://viewonwebsite.com', 'https://www.viewonwebsite.com'],
  },
})
export class AnalyticsGateway {
  constructor(private analyticsService: AnalyticsService) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('redirectionAdded')
  async addRedirection(
    @MessageBody('keywordId') keywordId: number,
    @MessageBody('timezone') timezone: any,
  ) {
    await this.analyticsService.createNewKeywordAnalyticsEntry(keywordId);
    const newRecord = await this.analyticsService.getIndividualKeywordAnalytics(
      timezone,
      keywordId,
    );
    this.server.emit('getNewRecords', newRecord);
  }

  @SubscribeMessage('createConnection')
  async createConnection(
    @ConnectedSocket() client: Socket,
    @MessageBody('keywordId') keywordId: number,
    @MessageBody('timezone') timezone: any,
  ) {
    const allRecords =
      await this.analyticsService.getIndividualKeywordAnalytics(
        timezone,
        keywordId,
      );
    this.server.emit('createConnection', allRecords);
  }

  @SubscribeMessage('getNewRecords')
  async getNewRecords(
    @ConnectedSocket() client: Socket,
    @MessageBody('keywordId') keywordId: number,
    @MessageBody('timezone') timezone: any,
  ) {
    const allRecords =
      await this.analyticsService.getIndividualKeywordAnalytics(
        timezone,
        keywordId,
      );
    this.server.emit('getNewRecords', allRecords);
  }
}
