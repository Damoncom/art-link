import React from 'react';
import DialogBox from '../../components/DialogBox/DialogBox';
import author2 from '../../components/ArtworkCard/image/demo5.jpg';

const Likes: React.FC = () => {
  const likes = [
    {
      id: 1,
      avatarUrl: author2,
      username: '好吃鱼鱼鱼',
      message: '点赞了你的作品《春日樱花》',
      time: '昨天',
    },
    // 更多点赞消息...
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '200px',
        background: 'pink',
      }}
    >
      {likes.map((like) => (
        <DialogBox
          key={like.id}
          avatarUrl={like.avatarUrl}
          username={like.username}
          message={like.message}
          time={like.time}
        />
      ))}
    </div>
  );
};

export default Likes;
