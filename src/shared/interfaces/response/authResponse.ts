import { IUserRegistrationResponseData } from '../user/userRegistration.interface';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUserRegistrationResponseData;
}
