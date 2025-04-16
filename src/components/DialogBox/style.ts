import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  padding: 12px 15px;
  margin: 15px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.2s;
  position: relative;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const TimeAndUnread = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Time = styled.span`
  font-size: 12px;
  color: #999;
  margin-bottom: 4px;
`;

export const UnreadBadge = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #a456dd;
  color: white;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding-right: 40px; /* 给右侧时间留空间 */
`;
