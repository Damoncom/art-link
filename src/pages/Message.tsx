import React from 'react';
// import TBBar from '../components/TBBar/TBBar';

interface MessageProps {}

const Message: React.FC<MessageProps> = ({}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '60px',
      }}
    >
      消息
    </div>
  );
};

export default Message;
