import React from 'react';
import * as S from './style';

interface FollowNotificationProps {
  avatarUrl: string;
  username: string;
  time: string;
  unreadCount?: number;
  onClick?: () => void;
}

const FollowNotification: React.FC<FollowNotificationProps> = ({
  avatarUrl,
  username,
  time,
  unreadCount = 0,
  onClick,
}) => {
  return (
    <S.MessageContainer onClick={onClick}>
      <S.Avatar $avatarUrl={avatarUrl} />
      <S.Content>
        <S.Header>
          <S.Username>{username}</S.Username>
        </S.Header>
        <S.MessageText>新用户关注了你</S.MessageText>
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

export default FollowNotification;
