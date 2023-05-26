import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  WebSocketServer,
  OnGatewayInit,
  //   WsResponse,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AnalyticsService } from './analytics.service';
// import { Observable, from } from 'rxjs';
// import { map } from 'rxjs/operators';

@WebSocketGateway({ namespace: '/analytics' })
export class AnalyticsGateway implements OnGatewayInit {
  constructor(private readonly analyticsService: AnalyticsService) {}
  @WebSocketServer() wss: Server;

  afterInit() {
    console.log('connection initiated');
  }

  @SubscribeMessage('add_new_record')
  async addNewRecord(@MessageBody() data: any) {
    console.log('added_new_record');
    const newRecord =
      await this.analyticsService.createNewKeywordAnalyticsEntry(data.hashtag);
    // Emit the new data to the client
    this.wss.emit('notify_client', {
      hashtag: newRecord.keyword.letters,
    });
  }

  @SubscribeMessage('get_new_records')
  async handleMessage(@MessageBody() data: any) {
    // send new data to the client
    console.log('new record sents');
    const foundRecords =
      await this.analyticsService.getIndividualKeywordAnalytics(data.hashtag);

    return foundRecords;
  }
}
