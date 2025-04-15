import React from 'react';
import * as S from './style';

interface DialogBoxProps {
  avatarUrl: string;
  username: string;
  message: string;
  time: string;
  onClick?: () => void;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  avatarUrl,
  username,
  message,
  time,
  onClick,
}) => {
  return (
    <S.MessageContainer onClick={onClick}>
      <S.Avatar $avatarUrl={avatarUrl} />
      <S.Content>
        <S.Header>
          <S.Username>{username}</S.Username>
          <S.Time>{time}</S.Time>
        </S.Header>
        <S.MessageText>{message}</S.MessageText>
      </S.Content>
    </S.MessageContainer>
  );
};

export default DialogBox;
