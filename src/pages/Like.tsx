import React from 'react';
import ArtworkCard from '../components/ArtworkCard/ArtworkCard';
import demo1 from '../components/ArtworkCard/image/demo1.jpg';
import author1 from '../components/ArtworkCard/image/author1.jpg';
import demo4 from '../components/ArtworkCard/image/demo4.jpg';
import author3 from '../components/ArtworkCard/image/author3.jpg';
import demo5 from '../components/ArtworkCard/image/demo5.jpg';

interface LikeProps {}

const Like: React.FC<LikeProps> = ({}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '60px',
      }}
    >
      <div style={{ padding: '10px', width: '100%' }}>
        <ArtworkCard
          imageUrl={demo1}
          title="蓝色垂耳兔卡瓦卡瓦"
          likes={1250}
          authorAvatar={author1}
          authorName="我是妈粉不是兄弟"
          initialLiked={true}
        />
        <ArtworkCard
          imageUrl={demo4}
          title="玛格尔酒庄葡萄花"
          likes={52250}
          authorAvatar={author3}
          authorName="炒饭博主bot"
          initialLiked={true}
        />
        <ArtworkCard
          imageUrl={demo5}
          title="垂耳兔宝宝比耶"
          likes={2250}
          authorAvatar={author1}
          authorName="我是妈粉不是兄弟"
          initialLiked={true}
        />
      </div>
    </div>
  );
};

export default Like;
