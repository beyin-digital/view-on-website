import { IsNotEmpty } from 'class-validator';

export class UpdateKeywordDto {
  @IsNotEmpty()
  location: any;
}
