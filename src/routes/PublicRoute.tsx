import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { INITIAL_ROUTE } from 'configs/routes.config';
import { userAuth } from 'shared/api/hooks/allApiAtoms/userAuth';
// import useIsLoggedIn from 'shared/api/hooks/useIsLogin';

interface IProps {
  children: ReactElement;
}

const PublicRoute: React.FC<IProps> = ({ children }) => {
  const [user] = useRecoilState(userAuth);
  console.log(user);
  return user?.isAuthenticated ? <Navigate to={INITIAL_ROUTE} /> : children;
};

export default PublicRoute;
