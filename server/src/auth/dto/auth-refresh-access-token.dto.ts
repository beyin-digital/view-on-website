import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RefreshAccessTokenDto {
  @ApiProperty({
    example: 'Lq2tzaayH4_Q4nOaEBSBv',
    description: 'Refresh token assigned to user',
  })
  @IsString()
  token: string;
}
