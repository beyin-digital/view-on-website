import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../roles/entities/role.entity';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Matches,
  MinLength,
  Validate,
} from 'class-validator';
import { Status } from 'src/statuses/entities/status.entity';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { FileEntity } from 'src/files/entities/file.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';

export class CreateUserDto {
  @ApiProperty({ example: 'test1@example.com' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @Validate(IsNotExist, ['User'], {
    message: 'email_already_exists',
  })
  @IsEmail()
  email: string | null;

  @ApiProperty({ example: 'google' })
  provider?: string;

  socialId?: string | null;

  @ApiProperty({ example: 'John Doe' })
  @IsNotEmpty()
  fullName?: string | null;

  @ApiProperty({ example: 'secretPassword123**' })
  @MinLength(8)
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: 'password_too_weak_or_does_not_requirement',
  })
  password?: string;

  @ApiProperty({
    example: 'cus_Nwm3mQDOBmEegT',
    description: 'Stripe customer id',
  })
  @IsNotEmpty()
  stripeCustomerId?: string | null;

  @ApiProperty({ type: () => FileEntity })
  @IsOptional()
  @Validate(IsExist, ['FileEntity', 'id'], {
    message: 'image_not_found',
  })
  photo?: FileEntity | null;

  @ApiProperty({ type: Role })
  @Validate(IsExist, ['Role', 'id'], {
    message: 'role_not_found',
  })
  role?: Role | null;

  @ApiProperty({ type: Status })
  @Validate(IsExist, ['Status', 'id'], {
    message: 'status_not_found',
  })
  status?: Status;
}
