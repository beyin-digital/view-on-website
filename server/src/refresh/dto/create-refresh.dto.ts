import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Validate } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';

export class CreateRefreshDto {
  @ApiProperty({ example: 'Lq2tzaayH4_Q4nOaEBSBv' })
  token: string;

  @ApiProperty({ type: () => User })
  @IsNotEmpty()
  @Validate(IsExist, ['User'], {
    message: 'user_not_found',
  })
  user: User;
}
