import { User } from '../../../users/entities/user.entity';

export type LoginResponseType = Readonly<{
  token?: string;
  refreshToken?: string;
  user?: User;
}>;
