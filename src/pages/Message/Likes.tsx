import React from 'react';
import DialogBox from '../../components/DialogBox/DialogBox';
import author1 from '../../components/ArtworkCard/image/author1.jpg';
import author2 from '../../components/ArtworkCard/image/demo5.jpg';

const Likes: React.FC = () => {
  const likes = [
    {
      id: 1,
      avatarUrl: author2,
      username: '水墨丹青',
      message: '点赞了你的作品《江南春色》',
      time: '昨天',
    },
    {
      id: 2,
      avatarUrl: author1,
      username: '油画人生',
      message: '点赞了你的作品《星空下的向日葵》',
      time: '4-30',
    },
    {
      id: 3,
      avatarUrl: author2,
      username: '素描大师',
      message: '点赞了你的作品《老街记忆》',
      time: '4-29',
    },
    {
      id: 4,
      avatarUrl: author1,
      username: '水彩艺术家',
      message: '收藏了你的作品《海边日出》',
      time: '4-27',
    },
    {
      id: 5,
      avatarUrl: author2,
      username: '数字绘画',
      message: '点赞了你的作品《未来城市》',
      time: '4-12',
    },
    {
      id: 6,
      avatarUrl: author1,
      username: '版画匠人',
      message: '收藏了你的作品《山间小屋》',
      time: '3-30',
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '200px',
        marginTop: '40px',
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
