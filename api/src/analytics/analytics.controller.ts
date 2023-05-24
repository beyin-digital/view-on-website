import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AuthGuard } from '@nestjs/passport';
import { InfinityPaginationResultType } from 'src/utils/types/infinity-pagination-result.type';
import { KeywordViewCount } from './entities/keyword-count.entity';
import { infinityPagination } from 'src/utils/infinity-pagination';
import { GetAnalyticsDto } from './dto/get-analytics.dto';
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
  @UseGuards(AuthGuard('jwt'))
  @Get('')
  async getKeywordAnalytics(
    @Req() req: any,
    @Query('keyword') getAnalyticsDto: GetAnalyticsDto,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ): Promise<InfinityPaginationResultType<KeywordViewCount>> {
    if (limit > 50) {
      limit = 50;
    }
    return infinityPagination(
      await this.analyticsService.getIndividualKeywordAnalytics(
        req.user,
        getAnalyticsDto,
        {
          page,
          limit,
        },
      ),
      { page, limit },
    );
  }
}
