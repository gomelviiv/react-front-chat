import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'configs/routes.config';

import { ApiController } from '../api.controller';

const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    const token = localStorage.getItem('token');
    token ? localStorage.removeItem('token') : '';
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await ApiController.getApiCall<any>('auth/logout', {
        'Content-Type': 'multipart/form-data',
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    navigate(ROUTES.LOGIN);
  };

  return { logout };
};

export default useLogout;
