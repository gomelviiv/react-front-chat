import IUser from '../user/user.interface';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
