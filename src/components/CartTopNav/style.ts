import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 50px;
  background: white;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
`;

export const TabContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabItem = styled.div<{ $active: boolean }>`
  flex: 0 0 auto;
  padding: 12px 16px;
  font-size: 16px;
  color: ${(props) => (props.$active ? '#A456DD' : '#666')};
  /* border-bottom: 2px solid
    ${(props) => (props.$active ? '#A456DD' : 'transparent')}; */
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    color: #a456dd;
  }
`;
