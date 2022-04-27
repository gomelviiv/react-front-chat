import { AxiosResponse } from 'axios';
import { useSetRecoilState } from 'recoil';

import IUserAuth from 'shared/interfaces/user/userAuth.interface';
import { IUserLoginRequest } from 'shared/interfaces/user/userLogin.interface';

import { ApiController } from '../api.controller';

import { userAuth } from './allApiAtoms/userAuth';

const useLogin = () => {
  const setUserAuth = useSetRecoilState<IUserAuth | AxiosResponse>(userAuth);

  const userLogin = async (login: string, password: string) => {
    try {
      const response = await ApiController.postApiCall<IUserLoginRequest, IUserAuth>(
        '/login',
        {
          login,
          password,
        },
        {},
      );
      localStorage.setItem('token', response.data.user.accessToken);
      setUserAuth({ isAuthenticated: true, user: response.data.user });
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  return { userLogin };
};

export default useLogin;
