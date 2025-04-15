import React, { useState } from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import * as S from './style';

interface ArtworkCardProps {
  imageUrl: string; // 作品图片URL
  title: string; // 作品标题
  likes: number; // 点赞数量
  authorAvatar: string; // 作者头像URL
  authorName: string; // 作者姓名
  initialLiked?: boolean; // 初始点赞状态
  onLikeChange?: (liked: boolean) => void; // 点赞状态变化回调
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({
  imageUrl,
  title,
  likes,
  authorAvatar,
  authorName,
  initialLiked = false,
  onLikeChange,
}) => {
  const [liked, setLiked] = useState(initialLiked);
  const [currentLikes, setCurrentLikes] = useState(likes);

  const handleLikeClick = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setCurrentLikes(newLiked ? currentLikes + 1 : currentLikes - 1);
    onLikeChange?.(newLiked);
  };

  const formatLikeCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k+`;
    }
    return count.toString();
  };

  return (
    <S.CardContainer>
      <S.ArtworkImage $imageUrl={imageUrl} />

      <S.ContentContainer>
        <S.TitleRow>
          <S.Title>{title}</S.Title>
          <S.LikeButton onClick={handleLikeClick}>
            {liked ? (
              <HeartFilled style={{ color: '#A456DD', fontSize: '18px' }} />
            ) : (
              <HeartOutlined style={{ color: '#666', fontSize: '18px' }} />
            )}
            <S.LikeCount>{formatLikeCount(currentLikes)}</S.LikeCount>
          </S.LikeButton>
        </S.TitleRow>

        <S.AuthorRow>
          <S.AuthorAvatar $avatarUrl={authorAvatar} />
          <S.AuthorName>{authorName}</S.AuthorName>
        </S.AuthorRow>
      </S.ContentContainer>
    </S.CardContainer>
  );
};

export default ArtworkCard;
