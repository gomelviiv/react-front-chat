import { IUserRegistrationResponseData } from './userRegistration.interface';

interface IUserLoginRequest {
  login: string;
  password: string;
}

interface IUserLoginResponse {
  accessToken: string;
  refreshToken: string;
  user: IUserRegistrationResponseData;
}

export type { IUserLoginRequest, IUserLoginResponse };
