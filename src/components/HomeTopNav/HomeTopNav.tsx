import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 50px;
  background: white;
  z-index: 10;
`;

const NavItem = styled.div<{ $isActive: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$isActive ? '#A456DD' : '#666')};
  font-weight: ${(props) => (props.$isActive ? 'bold' : 'normal')};
  border-bottom: ${(props) => (props.$isActive ? '2px solid #A456DD' : 'none')};
`;

const HomeTopNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { id: 'discover', label: '发现', path: '/home/discover' },
    { id: 'following', label: '关注', path: '/home/following' },
  ];

  return (
    <NavContainer>
      {tabs.map((tab) => (
        <NavItem
          key={tab.id}
          $isActive={location.pathname === tab.path}
          onClick={() => navigate(tab.path)}
        >
          {tab.label}
        </NavItem>
      ))}
    </NavContainer>
  );
};

export default HomeTopNav;
