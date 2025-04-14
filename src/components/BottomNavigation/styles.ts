import styled from 'styled-components';

// 容器样式（自动转换为 vw 单位）
export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px; /* postcss 会转换为 vw */
  display: flex;
  background: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

// 导航项（带动态 active 状态）
export const NavItem = styled.div<{ $isActive: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$isActive ? '#A456DD' : '#666')};
  transition: color 0.3s;

  &:active {
    opacity: 0.8;
  }
`;

// 图标容器
export const IconWrapper = styled.div`
  font-size: 20px; /* 自动转换 */
  margin-bottom: 4px;
`;

// 文字标签
export const Label = styled.span`
  font-size: 12px; /* 自动转换 */
  transform: scale(0.9);
`;

// 导出所有样式组件
export * from './styles';
