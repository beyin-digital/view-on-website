import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsUrl } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';
// import { LocationData } from 'src/utils/types/location.type';

export class CreateKeywordDto {
  @ApiProperty({ example: 'Hello World' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  letters: string;

  @ApiProperty({ example: 'https://helloworld.com' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @IsUrl()
  sublink: string;

  @ApiProperty({ example: 2000 })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 1,
    description:
      'User Entity that will be connected after order is completed by stripe',
  })
  @IsNotEmpty()
  user: User;
}
