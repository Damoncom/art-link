import React from 'react';
import CommentNotification from '../../components/CommentNotification/CommentNotification';
import author1 from '../../components/ArtworkCard/image/author1.jpg';
import author2 from '../../components/ArtworkCard/image/demo5.jpg';

const Comments: React.FC = () => {
  const comments = [
    {
      id: 1,
      avatarUrl: author2,
      username: '艺术评论家',
      message: '这幅作品的色彩运用非常出色!',
      artworkTitle: '春日樱花',
      time: '昨天',
      unreadCount: 2,
    },
    {
      id: 2,
      avatarUrl: author1,
      username: '美术老师',
      message: '构图很有创意，期待更多作品',
      artworkTitle: '葡萄花',
      time: '4-30',
    },
    {
      id: 3,
      avatarUrl: author2,
      username: '设计爱好者',
      message: '喜欢这种风格，能分享创作过程吗?',
      artworkTitle: '城市夜景',
      time: '4-28',
    },
  ];

  return (
    <div style={{ width: '100%', height: '200px', marginTop: '40px' }}>
      {comments.map((comment) => (
        <CommentNotification
          key={comment.id}
          avatarUrl={comment.avatarUrl}
          username={comment.username}
          message={comment.message}
          artworkTitle={comment.artworkTitle}
          time={comment.time}
          unreadCount={comment.unreadCount}
        />
      ))}
    </div>
  );
};

export default Comments;
