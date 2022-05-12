import { Button } from '@mui/material';
import React, { FC } from 'react';

import useLogout from 'shared/api/hooks/useLogOut';

interface IProps {
  a: string;
}

const Chat: FC<IProps> = () => {
  const { logout } = useLogout();

  return (
    <>
      <div>Chat Chat Chat Chat Chat Chat </div>
      <Button type="button" onClick={() => logout()}>
        Выйти
      </Button>
    </>
  );
};

export default Chat;
