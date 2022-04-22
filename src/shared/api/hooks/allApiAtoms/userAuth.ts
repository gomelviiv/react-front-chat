import { atom } from 'recoil';
import IUserAuth from 'shared/interfaces/user/iUserAuth.interface';

const userAuthDefaults: IUserAuth = {
  isAuthenticated: false,
  user: null,
};

export const userAuth = atom({
  key: 'userAuth',
  default: userAuthDefaults,
});