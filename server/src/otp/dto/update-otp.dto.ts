import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOtpDto } from './create-otp.dto';

export class UpdateOtpDto extends PartialType(CreateOtpDto) {
  @ApiProperty({ description: 'Time OTP was used' })
  usedAt: Date;
}
