import styled from 'styled-components';

export const MessageContainer = styled.div`
  /* width: 100%; */
  display: flex;
  padding: 12px 15px;
  margin: 15px 0;
  /* border-bottom: 1px solid #f5f5f5; */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #fafafa;
  }
`;

export const Avatar = styled.div<{ $avatarUrl: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: url(${(props) => props.$avatarUrl});
  background-size: cover;
  background-position: center;
  margin-right: 12px;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Username = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #333;
`;

export const Time = styled.span`
  font-size: 12px;
  color: #999;
`;

export const MessageText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
