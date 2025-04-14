import React from 'react';
import styled from 'styled-components';

import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './styles';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  path: string;
}

// 修复1：明确声明 transient props 类型
interface NavItemProps {
  $isActive: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

// 修复2：使用正确的类型注解
const StyledNavItem = styled.div<NavItemProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$isActive ? '#A456DD' : '#666')};
  transition: color 0.3s;
`;

export const BottomNav: React.FC<{ items: NavItem[] }> = ({ items }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`) ||
      (path === '/home' &&
        (location.pathname === '/' || location.pathname.startsWith('/home')))
    );
  };

  return (
    <S.NavContainer>
      {items.map((item) => (
        <StyledNavItem
          key={item.id}
          $isActive={isActive(item.path)}
          onClick={() => navigate(item.path)}
        >
          <S.IconWrapper $isActive={isActive(item.path)}>
            {item.icon}
          </S.IconWrapper>
          <S.Label>{item.label}</S.Label>
        </StyledNavItem>
      ))}
    </S.NavContainer>
  );
};
