import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

export class InitiatePaymentDto {
  @IsString()
  @Validate(IsNotExist, ['Keyword'], {
    message: 'keyword already exists',
  })
  @IsNotEmpty()
  letters: string;

  @IsString()
  sublink: string;

  @IsString()
  interval: string;
}
