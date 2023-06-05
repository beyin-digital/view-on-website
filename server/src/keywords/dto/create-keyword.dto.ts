import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';
import { User } from 'src/users/entities/user.entity';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';

export class CreateKeywordDto {
  @ApiProperty({ example: 'hello world' })
  @IsNotEmpty()
  letters?: string;

  @ApiProperty({
    example: 'https://helloworld.com',
    description: 'Sublink to be attached to keyword',
  })
  @Transform(lowerCaseTransformer)
  sublink?: string;

  @ApiProperty({ type: () => User, description: 'User who will own keyword' })
  @IsNotEmpty()
  user?: User;

  @IsNotEmpty()
  @IsOptional()
  subscription?: Subscription;
}
