import { ApiProperty } from '@nestjs/swagger';

export class RefreshAccessTokenDto {
  @ApiProperty({
    example: 'Lq2tzaayH4_Q4nOaEBSBv',
    description: 'Refresh token assigned to user',
  })
  token: string;
}
