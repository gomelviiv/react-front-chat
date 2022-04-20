import React from 'react';

import Login from './Login';

interface IProps {
  a: string;
}

const LoginContainer: React.FC<IProps> = ({}) => {
  return (
    <div>
      <Login a={'sdfdsf'} />
    </div>
  );
};

export default LoginContainer;
