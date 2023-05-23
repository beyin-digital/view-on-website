import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MinLength, Validate } from 'class-validator';
import { IsExist } from '../../utils/validators/is-exists.validator';
import { FileEntity } from '../../files/entities/file.entity';

export class AuthUpdateDto {
  @ApiProperty({
    type: () => FileEntity,
    description: 'Miage file user wants to use as profile photo',
  })
  @IsOptional()
  @Validate(IsExist, ['FileEntity', 'id'], {
    message: 'imageNotExists',
  })
  photo?: FileEntity;

  @ApiProperty({ example: 'John Doe', description: "User's Full name" })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  fullName?: string;

  @ApiProperty({ example: true, description: "User's  account's 2FA status" })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  twoFactorAuth: boolean;

  @ApiProperty({
    example: 'secretPassword123*',
    description: "User's new password",
  })
  @IsOptional()
  @IsNotEmpty()
  @MinLength(6)
  password?: string;

  @ApiProperty({
    example: 'secretPassword12',
    description: "User's previous password",
  })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  oldPassword: string;
}
