import React from 'react';
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard';
import demo1 from '../../components/ArtworkCard/image/demo1.jpg';
import author1 from '../../components/ArtworkCard/image/author1.jpg';
import demo2 from '../../components/ArtworkCard/image/demo2.jpg';
import author2 from '../../components/ArtworkCard/image/author2.jpg';
import demo3 from '../../components/ArtworkCard/image/demo3.jpg';
import author3 from '../../components/ArtworkCard/image/author3.jpg';

const Discover: React.FC = () => {
  return (
    <div style={{ padding: '10px', width: '100%' }}>
      {/* paddingTop: '50px', */}
      <ArtworkCard
        imageUrl={demo1}
        title="蓝色垂耳兔卡瓦卡瓦"
        likes={1250}
        authorAvatar={author1}
        authorName="我是妈粉不是兄弟"
        initialLiked={false}
        // onLikeChange={(liked) => console.log('点赞状态:', liked)}
      />
      <ArtworkCard
        imageUrl={demo2}
        title="日出拼豆第二弹"
        likes={2250}
        authorAvatar={author2}
        authorName="好吃鱼（福州版）"
        initialLiked={false}
      />
      <ArtworkCard
        imageUrl={demo3}
        title="葡萄花"
        likes={32250}
        authorAvatar={author3}
        authorName="炒饭博主bot"
        initialLiked={false}
      />
    </div>
  );
};

export default Discover;
