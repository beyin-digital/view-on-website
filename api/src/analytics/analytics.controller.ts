import {
  Controller,
  Get,
  Query,
  Req,
  //  UseGuards
} from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
// import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Analytics')
@Controller({
  path: 'analytics',
  version: '1',
})
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @ApiOperation({
    summary: 'Endpoint to get analytics for a keyword',
  })
  //   @UseGuards(AuthGuard('jwt'))
  @Get('keyword')
  async getKeywordAnalytics(
    @Req() req: any,
    @Query('keyword') keyword: any,
  ): Promise<any> {
    return await this.analyticsService.getIndividualKeywordAnalytics(
      keyword,
      //   req.user,
    );
  }
}
