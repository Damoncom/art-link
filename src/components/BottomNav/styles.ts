import styled from 'styled-components';

// 修复3：为所有 styled 组件明确定义 props 类型
interface StyledProps {
  $isActive?: boolean;
}

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  background: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.12);
  z-index: 100;
`;

export const IconWrapper = styled.div<StyledProps>`
  font-size: 20px;
  margin-bottom: 4px;
  color: ${(props) => (props.$isActive ? '#A456DD' : '#666')};
`;

export const Label = styled.span`
  font-size: 12px;
  transform: scale(0.9);
`;
