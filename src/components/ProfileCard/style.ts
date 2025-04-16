import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const Avatar = styled.div<{ $avatarUrl: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url(${(props) => props.$avatarUrl});
  background-size: cover;
  background-position: center;
  margin-right: 16px;
`;

export const ProfileInfo = styled.div`
  flex: 1;
`;

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const Name = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #333;
`;

export const VerifiedIcon = styled.span`
  margin-left: 8px;
  color: #a456dd;
`;

export const FollowIcon = styled.span`
  margin-left: auto;
  cursor: pointer;
`;

export const Bio = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatNumber = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const StatLabel = styled.span`
  font-size: 12px;
  color: #999;
  margin-top: 4px;
`;
