import React from 'react';
import * as S from './style';

export interface OrderCardProps {
  orderId: string;
  artworkImage: string;
  artworkName: string;
  price: number;
  quantity: number;
  orderTime: string;
  status: 'pending' | 'creating' | 'completed' | 'after-sale';
  creationPeriod?: string;
}

const OrderCard: React.FC<OrderCardProps> = ({
  // orderId,
  artworkImage,
  artworkName,
  price,
  quantity,
  orderTime,
  status,
  creationPeriod = '7天', // 默认创作周期
}) => {
  const statusText = {
    pending: '待付款',
    creating: '创作中',
    completed: '已完成',
    'after-sale': '售后',
  }[status];

  return (
    <S.OrderContainer>
      <S.OrderHeader>
        <S.OrderTime>
          <span style={{ fontSize: '14px', color: '#A456DD' }}>
            【创作周期：{creationPeriod}】
          </span>
          {orderTime}
        </S.OrderTime>
        <S.OrderStatus $status={status}>{statusText}</S.OrderStatus>
      </S.OrderHeader>

      <S.OrderContent>
        <S.ArtworkImage $imageUrl={artworkImage} />
        <S.ArtworkInfo>
          <S.ArtworkName>{artworkName}</S.ArtworkName>
          <S.PriceRow>
            <S.ArtworkPrice>¥{price.toFixed(2)}</S.ArtworkPrice>
            <S.ArtworkQuantity>x{quantity}</S.ArtworkQuantity>
          </S.PriceRow>
        </S.ArtworkInfo>
      </S.OrderContent>

      <S.OrderFooter>
        <span>共计{quantity}件 应付：</span>
        <S.TotalAmount>¥{(price * quantity).toFixed(2)}</S.TotalAmount>
      </S.OrderFooter>
    </S.OrderContainer>
  );
};

export default OrderCard;
// export type { OrderCardProps };
