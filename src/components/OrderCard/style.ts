import styled from 'styled-components';

export const OrderContainer = styled.div`
  margin: 15px 10px;
  padding: 16px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
`;

export const OrderTime = styled.div`
  font-size: 12px;
  color: #999;
`;

export const OrderStatus = styled.span<{ $status: string }>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: white;
  background-color: ${(props) => {
    switch (props.$status) {
      case 'pending':
        return '#ff4d4f';
      case 'creating':
        return '#a456dd';
      case 'completed':
        return '#52c41a';
      case 'after-sale':
        return '#faad14';
      default:
        return '#666';
    }
  }};
`;

export const OrderContent = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const ArtworkImage = styled.div<{ $imageUrl: string }>`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  margin-right: 12px;
`;

export const ArtworkInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArtworkName = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArtworkPrice = styled.span`
  font-size: 16px;
  color: #a456dd;
  font-weight: 600;
`;

export const ArtworkQuantity = styled.span`
  font-size: 12px;
  color: #999;
`;

export const OrderFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 8px;
  border-top: 1px solid #f0f0f0;
  font-size: 14px;
  color: #999;
`;

export const TotalAmount = styled.span`
  font-weight: 600;
  color: #a456dd;
  margin-left: 4px;
`;
