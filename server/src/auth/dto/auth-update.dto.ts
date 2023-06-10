import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  Matches,
  MinLength,
  Validate,
} from 'class-validator';
import { IsExist } from '../../utils/validators/is-exists.validator';
import { FileEntity } from '../../files/entities/file.entity';

export class AuthUpdateDto {
  @ApiProperty({ type: () => FileEntity })
  @IsOptional()
  @Validate(IsExist, ['FileEntity', 'id'], {
    message: 'image_does_not_exist',
  })
  photo?: FileEntity;

  @ApiProperty({ example: 'Imran Ali' })
  @IsOptional()
  @IsNotEmpty({ message: 'must_not_be_empty' })
  fullName?: string;

  @ApiProperty()
  @MinLength(8)
  @IsNotEmpty()
  @Matches(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^*&+=])(?=\S+$).{8,}$/,
    {
      message: 'password_too_weak',
    },
  )
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'must_not_be_empty' })
  oldPassword: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'must_not_be_empty' })
  email?: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty({ message: 'must_not_be_empty' })
  twoFactorAuthEnabled?: boolean;

  @ApiProperty({ example: 'Poland' })
  @IsOptional()
  country?: string | null;

  @ApiProperty({ example: 'ACME industries' })
  @IsOptional()
  organisation?: string | null;
}
