import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthRefreshAccessTokenDto {
  @ApiProperty()
  @IsNotEmpty()
  token: string;
}
