import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class AuthForgotPasswordDto {
  @ApiProperty({
    example: 'test@example.com||hello world',
    description: "User's email or keyword they own",
  })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  identifier: string;
}
