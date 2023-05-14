import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Post,
  Query,
  Req,
  SerializeOptions,
  UseGuards,
} from '@nestjs/common';
import { Keyword } from './entities/keyword.entity';
import { KeywordsService } from './keywords.service';
import { InfinityPaginationResultType } from 'src/utils/types/infinity-pagination-result.type';
import { infinityPagination } from 'src/utils/infinity-pagination';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateKeywordDto } from './dto/create-keyword.dto';

@ApiTags('Keywords')
@Controller({
  path: 'keywords',
  version: '1',
})
export class KeywordsController {
  constructor(private readonly keywordsService: KeywordsService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Req() request,
    @Body() createKeywordDto: CreateKeywordDto,
  ): Promise<Keyword> {
    return this.keywordsService.create(request.user, createKeywordDto);
  }

  @Get('')
  async findOne(@Query('hashtag') hashtag: string) {
    return this.keywordsService.findByHashTag(hashtag);
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
