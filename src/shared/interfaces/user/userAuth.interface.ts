import IUserLogged from './userLogged.interface';

export default interface IUserAuth {
  isAuthenticated: boolean;
  user: IUserLogged;
}
