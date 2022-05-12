import { IUserRegistrationResponseData } from './userRegistration.interface';

export default interface IUserData {
  isAuthenticated: boolean;
  user: IUserRegistrationResponseData;
}
