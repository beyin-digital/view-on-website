import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class StripeCreateSetupIntentDto {
  @ApiProperty({ example: 'cus_Nwm3mQDOBmEegT' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  customerId: string;
}
