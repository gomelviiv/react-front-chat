import React, { FC } from 'react';

import Chat from './Chat';

interface IProps {
  a: string;
}

const ChatContainer: FC<IProps> = () => {
  return (
    <div>
      <Chat a={'sfdsf'} />
    </div>
  );
};

export default ChatContainer;
