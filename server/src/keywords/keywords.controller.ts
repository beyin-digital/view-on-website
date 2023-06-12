import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  HttpStatus,
  HttpCode,
  SerializeOptions,
  Req,
} from '@nestjs/common';
import { UpdateKeywordDto } from './dto/update-keyword.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/roles/roles.decorator';
import { RoleEnum } from 'src/roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/roles/roles.guard';
import { infinityPagination } from 'src/utils/infinity-pagination';
import { Keyword } from './entities/keyword.entity';
import { InfinityPaginationResultType } from '../utils/types/infinity-pagination-result.type';
import { NullableType } from '../utils/types/nullable.type';
import { KeywordsService } from './keywords.service';

@ApiTags('Keywords')
@Controller({
  path: 'keywords',
  version: '1',
})
export class KeywordsController {
  constructor(private readonly keywordsService: KeywordsService) {}

  @Get('letters')
  @HttpCode(HttpStatus.OK)
  async findByKeyword(
    @Query('letters') letters: string,
  ): Promise<NullableType<Keyword>> {
    const slug = letters.toLowerCase().replace(/ /, '-');
    return this.keywordsService.findOne({ slug });
  }

  @Get('check/premium')
  @HttpCode(HttpStatus.OK)
  async findAllPremium(): Promise<Keyword[]> {
    return await this.keywordsService.findAllSingleLetterKeywords();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @SerializeOptions({
    groups: ['me', 'admin'],
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string): Promise<NullableType<Keyword>> {
    return this.keywordsService.findOne({ id: +id });
  }

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
  ): Promise<InfinityPaginationResultType<Keyword>> {
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.keywordsService.findManyWithPagination(
        {
          page,
          limit,
        },
        req.user,
      ),
      { page, limit },
    );
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @SerializeOptions({
    groups: ['me', 'admin'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id') id: number,
    @Body() updateKeywordDto: UpdateKeywordDto,
  ): Promise<Keyword> {
    return this.keywordsService.update(id, updateKeywordDto);
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number): Promise<void> {
    return this.keywordsService.delete(id);
  }
}
