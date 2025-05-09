import React from 'react';
import ArtworkCard from '../../components/ArtworkCard/ArtworkCard';
import demo1 from '../../components/ArtworkCard/image/demo1.jpg';
import author1 from '../../components/ArtworkCard/image/author1.jpg';
import demo4 from '../../components/ArtworkCard/image/demo4.jpg';
import author3 from '../../components/ArtworkCard/image/author3.jpg';

const Following: React.FC = () => {
  return (
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
    </div>
  );
};

export default Following;
