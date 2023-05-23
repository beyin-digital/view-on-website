import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SubscriptionsService } from './subscriptions.service';
import { AuthGuard } from '@nestjs/passport';
import { InfinityPaginationResultType } from 'src/utils/types/infinity-pagination-result.type';
import { Subscription } from './entities/subscription.entity';
import { infinityPagination } from 'src/utils/infinity-pagination';

@ApiTags('Subscriptions')
@Controller({
  path: 'subscriptions',
  version: '1',
})
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @ApiOperation({ summary: "Endpoint to get all of user's subscriptions" })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Req() request,
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
        request.user,
      ),
      { page, limit },
    );
  }
}
