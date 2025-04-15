import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  height: 50px;
  /* position: sticky; */
  position: fixed;
  top: 0;
  background: white;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const TabContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const TabItem = styled.div<{ $active: boolean }>`
  flex: 1;
  text-align: center;
  padding: 12px 0;
  font-size: 14px;
  color: ${(props) => (props.$active ? '#A456DD' : '#666')};
  /* border-bottom: 2px solid
    ${(props) => (props.$active ? '#A456DD' : 'transparent')}; */
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #a456dd;
  }
`;
