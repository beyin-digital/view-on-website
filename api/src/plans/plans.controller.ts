import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PlansService } from './plans.service';
import { InfinityPaginationResultType } from 'src/utils/types/infinity-pagination-result.type';
import { Plan } from './entities/plan.entity';
import { infinityPagination } from 'src/utils/infinity-pagination';

@Controller('plans')
export class PlansController {
  constructor(private plansService: PlansService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ): Promise<InfinityPaginationResultType<Plan>> {
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.plansService.findManyWithPagination({
        page,
        limit,
      }),
      { page, limit },
    );
  }
}
