import { AxiosResponse } from 'axios';
import { useSetRecoilState } from 'recoil';

import IUserAuth from 'shared/interfaces/user/userAuth.interface';
import IUserData from 'shared/interfaces/user/userData.interface';
import { IUserLoginRequest } from 'shared/interfaces/user/userLogin.interface';

import { ApiController } from '../api.controller';

import { userAuth } from './allApiAtoms/userAuth';

const useLogin = () => {
  const setUserAuth = useSetRecoilState<IUserData | AxiosResponse>(userAuth);
  const userLogin = async (data) => {
    try {
      const response = await ApiController.postApiCall<IUserLoginRequest, IUserAuth>(
        'auth/login',
        data,
        {
          'Content-Type': 'multipart/form-data',
        },
      );
      localStorage.setItem('token', response.data.accessToken);
      setUserAuth({ isAuthenticated: true, user: response.data.user });
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  return { userLogin };
};

export default useLogin;
