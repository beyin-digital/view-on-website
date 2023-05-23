import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class StripeCreateCustomerDto {
  @ApiProperty({ example: 'test1@example.com||hello world' })
  @Transform(lowerCaseTransformer)
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'John doe', description: "User's name" })
  @IsNotEmpty()
  name: string;
}
