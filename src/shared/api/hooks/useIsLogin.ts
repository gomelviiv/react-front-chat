import { AxiosResponse } from 'axios';
import { useSetRecoilState } from 'recoil';

import IUserData from 'shared/interfaces/user/userData.interface';

import { ApiController } from '../api.controller';

import { userAuth } from './allApiAtoms/userAuth';

const useIsLoggedIn = async (): Promise<void> => {
  const setUserAuth = useSetRecoilState<IUserData | AxiosResponse>(userAuth);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return await ApiController.getApiCall<any>('auth/refresh', {
    'Content-Type': 'multipart/form-data',
  })
    .then((response) => {
      localStorage.setItem('token', response.data.accessToken);
      setUserAuth({ isAuthenticated: true, user: response.data.user });
    })
    .catch(() => {
      setUserAuth({ isAuthenticated: false, user: null });
    });
};

export default useIsLoggedIn;
