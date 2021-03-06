import { IUserRegistrationResponseData } from './userRegistration.interface';

export default interface IUserAuth {
  isAuthenticated: boolean;
  user: IUserRegistrationResponseData;
  accessToken: string;
  refreshToken: string;
}
