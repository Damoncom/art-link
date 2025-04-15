import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  /* width: 400px; */
  /* max-width: 300px; */
  margin: 0 0 15px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  background: white;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    /* transform: translateY(-4px); */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

export const ArtworkImage = styled.div<{ $imageUrl: string }>`
  width: 100%;
  padding-bottom: 100%; /* 1:1 比例 */
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 12px rgba(164, 86, 221, 0.1);
`;

export const ContentContainer = styled.div`
  padding: 16px;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  /* border-top: 1px solid #f0f0f0; */
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikeCount = styled.span`
  font-size: 12px;
  color: #999;
  margin-top: 2px;
`;

export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`;

export const AuthorAvatar = styled.div<{ $avatarUrl: string }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-image: url(${(props) => props.$avatarUrl});
  background-size: cover;
  background-position: center;
  margin-right: 10px;
`;

export const AuthorName = styled.span`
  font-size: 14px;
  color: #666;
`;
