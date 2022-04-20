import React, { ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PUBLIC_ROUTES, PRIVATE_ROUTES, RESTRICTED_ROUTES } from './configs/routes.config';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {!!PUBLIC_ROUTES &&
        PUBLIC_ROUTES.length &&
        PUBLIC_ROUTES.map(
          (routeProps): ReactNode => (
            <Route
              key={routeProps.path}
              path={routeProps.path}
              element={<PublicRoute>{<routeProps.element />}</PublicRoute>}
            />
          ),
        )}

      {!!RESTRICTED_ROUTES &&
        RESTRICTED_ROUTES.length &&
        RESTRICTED_ROUTES.map(
          (routeProps): ReactNode => (
            <Route
              key={routeProps.path}
              path={routeProps.path}
              element={<PublicRoute>{<routeProps.element />}</PublicRoute>}
            />
          ),
        )}

      {!!PRIVATE_ROUTES &&
        PRIVATE_ROUTES.length &&
        PRIVATE_ROUTES.map((routeProps) => (
          <Route
            key={routeProps.path}
            path={routeProps.path}
            element={<PrivateRoute appTitle={routeProps.appTitle}>{<routeProps.element />}</PrivateRoute>}
          />
        ))}
    </Routes>
  );
};

export default AppRouter;
