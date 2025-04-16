import React from 'react';
import { CheckCircleOutlined, PlusOutlined } from '@ant-design/icons';
import * as S from './style';

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  bio: string;
  isVerified: boolean;
  isFollowing: boolean;
  stats: {
    following: number;
    followers: string;
    likes: string;
  };
  onFollowClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  bio,
  isVerified,
  isFollowing,
  stats,
  onFollowClick,
}) => {
  return (
    <S.ProfileContainer>
      <S.ProfileHeader>
        <S.Avatar $avatarUrl={avatarUrl} />
        <S.ProfileInfo>
          <S.NameRow>
            <S.Name>{name}</S.Name>
            {isVerified && (
              <S.VerifiedIcon>
                <CheckCircleOutlined />
              </S.VerifiedIcon>
            )}
            <S.FollowIcon onClick={onFollowClick}>
              {isFollowing ? (
                <span>已关注</span>
              ) : (
                <PlusOutlined style={{ color: '#A456DD' }} />
              )}
            </S.FollowIcon>
          </S.NameRow>
          <S.Bio>{bio}</S.Bio>
        </S.ProfileInfo>
      </S.ProfileHeader>

      <S.StatsContainer>
        <S.StatItem>
          <S.StatNumber>{stats.following}</S.StatNumber>
          <S.StatLabel>关注</S.StatLabel>
        </S.StatItem>
        <S.StatItem>
          <S.StatNumber>{stats.followers}</S.StatNumber>
          <S.StatLabel>粉丝</S.StatLabel>
        </S.StatItem>
        <S.StatItem>
          <S.StatNumber>{stats.likes}</S.StatNumber>
          <S.StatLabel>获赞与收藏</S.StatLabel>
        </S.StatItem>
      </S.StatsContainer>
    </S.ProfileContainer>
  );
};

export default ProfileCard;
