import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthRefreshAccessTokenDto {
  @ApiProperty({ example: 'cweffcwt24t22cn92t82' })
  @IsNotEmpty()
  token: string;
}
