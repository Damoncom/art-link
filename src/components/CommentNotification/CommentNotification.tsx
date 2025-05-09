import React from 'react';
import * as S from './style';

interface CommentNotificationProps {
  avatarUrl: string;
  username: string;
  message: string;
  artworkTitle: string;
  time: string;
  unreadCount?: number;
  onClick?: () => void;
}

const CommentNotification: React.FC<CommentNotificationProps> = ({
  avatarUrl,
  username,
  message,
  artworkTitle,
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
        <S.MessageText>
          评论了你的作品《{artworkTitle}》: {message}
        </S.MessageText>
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

export default CommentNotification;
