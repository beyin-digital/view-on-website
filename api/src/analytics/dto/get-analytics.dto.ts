import { IsNotEmpty } from 'class-validator';

export class GetAnalyticsDto {
  @IsNotEmpty()
  keyword: string;
}
