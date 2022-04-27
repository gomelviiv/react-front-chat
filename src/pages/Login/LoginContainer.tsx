import React from 'react';

import Login from './Login';

interface IProps {
  a: string;
}

const LoginContainer: React.FC<IProps> = ({}) => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginContainer;
