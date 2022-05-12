import { atom } from 'recoil';

import IUserAuth from 'shared/interfaces/user/userAuth.interface';

const userAuthDefaults: IUserAuth = {
  isAuthenticated: false,
  user: null,
  refreshToken: '',
  accessToken: '',
};

export const userAuth = atom({
  key: 'userAuth',
  default: userAuthDefaults,
});
