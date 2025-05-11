import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LeftOutlined,
  MessageOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Divider } from 'antd';
import styled from 'styled-components';
import author3 from '../components/ArtworkCard/image/author3.jpg';
import demo3 from '../components/ArtworkCard/image/demo3.jpg';

const OrderDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      {/* 顶部导航栏 */}
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <LeftOutlined />
        </BackButton>
        <Title>订单详情</Title>
      </Header>

      {/* 订单状态 */}
      <StatusCard
        onClick={() => navigate('/cart/orderDetail/tracking-process')}
        style={{ cursor: 'pointer' }}
      >
        <Logo>🎨</Logo>
        <StatusText>
          <div style={{ fontWeight: 'bold' }}>已完成创作</div>
          <div style={{ color: '#a456dd', fontSize: '14px' }}>
            创作周期：21天内
          </div>
        </StatusText>
      </StatusCard>

      {/* 作者信息 */}
      <AuthorCard>
        <AuthorHeader>
          <Avatar src={author3} />
          <AuthorInfo>
            <AuthorName>
              炒饭博主bot <VerifiedBadge>🍀️</VerifiedBadge>
              <FollowedBadge>已关注</FollowedBadge>
            </AuthorName>
            <AuthorTags>
              抽象 | 宠物 | 摄影 | 家居 | 美食 | 戒酒博主！
            </AuthorTags>
          </AuthorInfo>
        </AuthorHeader>
        <AuthorContact>
          <PhoneInfo>
            <PhoneOutlined style={{ marginRight: '5px' }} />
            189123456789
          </PhoneInfo>
          <ChatButton onClick={() => navigate('/chat')}>
            <MessageOutlined /> 聊天
          </ChatButton>
        </AuthorContact>
      </AuthorCard>

      {/* 商品信息 */}
      <ProductCard>
        <ProductImage src={demo3} />
        <ProductInfo>
          <ProductName>玛格尔酒庄葡萄花 X Concert.M.08042系列</ProductName>
          <ProductPrice>
            ¥599{' '}
            <span
              style={{ color: '#999', position: 'absolute', right: '25px' }}
            >
              x2
            </span>
          </ProductPrice>
        </ProductInfo>
        <TotalPrice>共计1件 应付：¥1198.00</TotalPrice>
      </ProductCard>

      {/* 订单信息 */}
      <OrderInfoCard>
        <InfoRow>
          <InfoLabel>订单时间</InfoLabel>
          <InfoValue>2025-04-09 14:00:05</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>支付时间</InfoLabel>
          <InfoValue>2025-04-09 14:00:18</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>订单编号</InfoLabel>
          <InfoValue>
            20250302504050349725187 <CopyButton>复制</CopyButton>
          </InfoValue>
        </InfoRow>

        <Divider style={{ margin: '16px 0' }} />

        <InfoRow>
          <InfoLabel>商品总计</InfoLabel>
          <InfoValue>¥1198.00</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>实付</InfoLabel>
          <InfoValue>¥1198.00</InfoValue>
        </InfoRow>
      </OrderInfoCard>
    </PageContainer>
  );
};

// 样式组件 (与之前相同)
const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  position: relative;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.div`
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  flex: 1;
  margin: 0;
`;

const StatusCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  margin-right: 12px;
`;

const StatusText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AuthorCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const AuthorHeader = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const VerifiedBadge = styled.span`
  margin-left: 4px;
  font-size: 14px;
`;

const FollowedBadge = styled.span`
  margin-left: 8px;
  font-size: 12px;
  color: #666;
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 10px;
`;

const AuthorTags = styled.div`
  color: #666;
  font-size: 14px;
`;

const AuthorContact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`;

const PhoneInfo = styled.div`
  display: flex;
  align-items: center;
  color: #666;
`;

const ChatButton = styled.button`
  background: #a456dd;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const ProductInfo = styled.div`
  margin-bottom: 12px;
`;

const ProductName = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const ProductPrice = styled.div`
  color: #a456dd;
  font-size: 16px;
`;

const TotalPrice = styled.div`
  text-align: right;
  font-weight: bold;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`;

const OrderInfoCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
`;

const InfoLabel = styled.div`
  color: #666;
`;

const InfoValue = styled.div`
  color: #333;
`;

const CopyButton = styled.span`
  color: #a456dd;
  margin-left: 8px;
  cursor: pointer;
`;

export default OrderDetail;
