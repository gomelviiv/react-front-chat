import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { INITIAL_ROUTE } from '../configs/routes.config';

interface IProps {
  children: ReactElement;
}

const PublicRoute: React.FC<IProps> = ({ children }) => {
  const isLoggedIn = false; //useIsLoggedIn();

  return isLoggedIn ? <Navigate to={INITIAL_ROUTE} /> : children;
};

export default PublicRoute;
