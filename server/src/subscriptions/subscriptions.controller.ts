import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Query,
  Req,
  SerializeOptions,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubscriptionsService } from './subscriptions.service';
import { InfinityPaginationResultType } from 'src/utils/types/infinity-pagination-result.type';
import { Subscription } from './entities/subscription.entity';
import { infinityPagination } from 'src/utils/infinity-pagination';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Subscriptions')
@Controller({
  path: 'subscriptions',
  version: '1',
})
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @UseGuards(AuthGuard('jwt'))
  @SerializeOptions({
    groups: ['me', 'admin'],
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Req() req: any,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ): Promise<InfinityPaginationResultType<Subscription>> {
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.subscriptionsService.findManyWithPagination(
        {
          page,
          limit,
        },
        req.user,
      ),
      { page, limit },
    );
  }
}
