import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateOtpDto {
  @ApiProperty({ description: 'The user to attach to the OTP' })
  @IsNotEmpty()
  user: User;
}
