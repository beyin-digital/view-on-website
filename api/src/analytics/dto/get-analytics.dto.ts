import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GetAnalyticsDto {
  @ApiProperty({ example: 'hello world', description: 'keyword to search' })
  @IsNotEmpty()
  keyword: string;
}
