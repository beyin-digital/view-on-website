import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class AuthForgotPasswordDto {
  @ApiProperty({
    example: 'test1@example.com || Hello world',
    description: "User's email address or purchased keyword",
  })
  @Transform(lowerCaseTransformer)
  @IsString()
  @IsNotEmpty()
  identifier: string;
}
