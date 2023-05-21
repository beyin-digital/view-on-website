import {
  Body,
  //   Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Put,
  //   Post,
  Query,
  Req,
  //   Req,
  SerializeOptions,
  UseGuards,
  //   UseGuards,
} from '@nestjs/common';
import { Keyword } from './entities/keyword.entity';
import { KeywordsService } from './keywords.service';
import { InfinityPaginationResultType } from 'src/utils/types/infinity-pagination-result.type';
import { infinityPagination } from 'src/utils/infinity-pagination';
// import { AuthGuard } from '@nestjs/passport';
import {
  // ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateKeywordDto } from './dto/update-keyword.dto';
import { ThrottlerBehindProxyGuard } from 'src/utils/guards/throttle-behind-proxy.guard';
import { AnalyticsService } from 'src/analytics/analytics.service';

@UseGuards(ThrottlerBehindProxyGuard)
@ApiTags('Keywords')
@Controller({
  path: 'keywords',
  version: '1',
})
export class KeywordsController {
  constructor(
    private readonly keywordsService: KeywordsService,
    private analyticsService: AnalyticsService,
  ) {}

  @Get('')
  async findOne(@Req() req: any, @Query('hashtag') hashtag: string) {
    await this.analyticsService.createNewKeywordAnalyticsEntry(hashtag);
    return this.keywordsService.findByHashTag(hashtag);
  }

  @Put(':id')
  async update(@Req() req: any, @Body() updateKeywordDto: UpdateKeywordDto) {
    return this.keywordsService.update(req.id, updateKeywordDto);
  }

  @SerializeOptions({
    groups: ['admin'],
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ): Promise<InfinityPaginationResultType<Keyword>> {
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.keywordsService.findManyWithPagination({
        page,
        limit,
      }),
      { page, limit },
    );
  }
}
