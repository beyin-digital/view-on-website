/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  WebSocketGateway,
  WebSocketServer,
  //   OnGatewayConnection,
  //   OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';
import { AnalyticsService } from './analytics.service';
// import { AuthGuard } from '@nestjs/passport';
// import { UseGuards } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: [
      'http://localhost:3000',
      'https://vow-client.vercel.app',
      'https://viewonwebsite.com',
    ],
  },
})
export class AnalyticsGateway {
  constructor(private analyticsService: AnalyticsService) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('redirectionAdded')
  async addRedirection(@MessageBody('keywordId') keywordId: number) {
    await this.analyticsService.createNewKeywordAnalyticsEntry(keywordId);
    const newRecord = await this.analyticsService.getIndividualKeywordAnalytics(
      keywordId,
    );
    this.server.emit('getNewRecords', newRecord);
  }

  @SubscribeMessage('createConnection')
  async createConnection(
    @ConnectedSocket() client: Socket,
    @MessageBody('keywordId') keywordId: number,
  ) {
    const allRecords =
      await this.analyticsService.getIndividualKeywordAnalytics(keywordId);
    this.server.emit('createConnection', allRecords);
  }

  @SubscribeMessage('getNewRecords')
  async getNewRecords(
    @ConnectedSocket() client: Socket,
    @MessageBody('keywordId') keywordId: number,
  ) {
    const allRecords =
      await this.analyticsService.getIndividualKeywordAnalytics(keywordId);
    this.server.emit('getNewRecords', allRecords);
  }
}
