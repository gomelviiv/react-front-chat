import { IUserLoginResponse } from './userLogin.interface';

export default interface IUserAuth {
  isAuthenticated: boolean;
  user: IUserLoginResponse;
}
