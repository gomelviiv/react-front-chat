// import { AxiosResponse } from 'axios';
// import { useSetRecoilState } from 'recoil';

import IUserAuth from 'shared/interfaces/user/userAuth.interface';
import { IUserRegistrationRequestData } from 'shared/interfaces/user/userRegistration.interface';

import { ApiController } from '../api.controller';

// import { userAuth } from './allApiAtoms/userAuth';

/**
 *
 *
 */
const useRegistration = () => {
  // const setUserAuth = useSetRecoilState<IUserAuth | AxiosResponse>(userAuth);

  // const registerUser = async (data: IUserRegistrationRequestData) => {
  const registerUser = async (data) => {
    try {
      await ApiController.postApiCall<IUserRegistrationRequestData, IUserAuth>('users', data, {
        'Content-Type': 'multipart/form-data',
      });

      // localStorage.setItem('token', response.data.user.accessToken);
      // setUserAuth({ isAuthenticated: true, user: response.data.user });
    } catch (error) {
      console.log(error);
    }
  };

  return { registerUser };
};

export default useRegistration;
