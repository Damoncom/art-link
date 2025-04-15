import styled from 'styled-components';

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: white;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
`;

export const NavItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$isActive ? '#A456DD' : '#666')};
  font-weight: ${(props) => (props.$isActive ? 'bold' : 'normal')};
  width: 100px;
  height: 100%;
  font-size: 17px;
  cursor: pointer;
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 20px;
  cursor: pointer;
  color: #666;
  font-size: 20px;
  transition: color 0.2s;

  &:hover {
    color: #a456dd;
  }
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 36px;
  /* border: 1px solid #ddd; */
  border: 1px solid white;
  border-radius: 18px;
  padding: 0 15px;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 0 rgba(164, 86, 221, 0);

  &:focus {
    border-color: #a456dd;
    box-shadow: 0 0 0 2px rgba(164, 86, 221, 0.2);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const CloseIcon = styled.div`
  margin-left: 10px;
  cursor: pointer;
  color: #666;
  transition: color 0.2s;

  &:hover {
    color: #a456dd;
  }
`;
