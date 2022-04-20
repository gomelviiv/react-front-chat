import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';

import { ROUTES } from '../configs/routes.config';

interface IProps {
  children: ReactElement;
  appTitle: string;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
  const isLoggedIn = false; //useIsLoggedIn();
  return isLoggedIn ? children : <Navigate to={ROUTES.LOGIN} />;
  // return isLoggedIn ? (
  //   <>
  //     <Helmet>
  //       <title>{`${process.env.APP_TITLE}: ${appTitle}`}</title>
  //       <meta name={appTitle} content={appTitle} />
  //     </Helmet>

  //     {children}
  //   </>
  // ) : (
  //   <Navigate to={ROUTES.LOGIN} />
  // );
};

export default PrivateRoute;
