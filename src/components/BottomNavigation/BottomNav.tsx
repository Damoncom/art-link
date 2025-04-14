import React from 'react';
import * as S from './styles'; // 导入样式组件

// 定义导航项类型
interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  path: string;
}

interface BottomNavProps {
  items: NavItem[];
  activeId: string;
  onChange: (id: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  items,
  activeId,
  onChange,
}) => {
  return (
    <S.NavContainer>
      {items.map((item) => (
        <S.NavItem
          key={item.id}
          $isActive={item.id === activeId}
          onClick={() => onChange(item.id)}
        >
          <S.IconWrapper>{item.icon}</S.IconWrapper>
          <S.Label>{item.label}</S.Label>
        </S.NavItem>
      ))}
    </S.NavContainer>
  );
};
