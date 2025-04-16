import React from 'react';
import * as S from './style';

interface DialogBoxProps {
  avatarUrl: string;
  username: string;
  message: string;
  time: string;
  unreadCount?: number; // 新增未读消息数
  onClick?: () => void;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  avatarUrl,
  username,
  message,
  time,
  unreadCount = 0, // 默认为0表示已读
  onClick,
}) => {
  return (
    <S.MessageContainer onClick={onClick}>
      <S.Avatar $avatarUrl={avatarUrl} />
      <S.Content>
        <S.Header>
          <S.Username>{username}</S.Username>
        </S.Header>
        <S.MessageText>{message}</S.MessageText>
      </S.Content>

      <S.TimeAndUnread>
        <S.Time>{time}</S.Time>
        {unreadCount > 0 && (
          <S.UnreadBadge>{unreadCount > 9 ? '9+' : unreadCount}</S.UnreadBadge>
        )}
      </S.TimeAndUnread>
    </S.MessageContainer>
  );
};

export default DialogBox;
