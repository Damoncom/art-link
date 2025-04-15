import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import * as S from './style';

const HomeTopNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const tabs = [
    { id: 'discover', label: '发现', path: '/home/discover' },
    { id: 'following', label: '关注', path: '/home/following' },
  ];

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  const handleSearch = () => {
    if (searchText.trim()) {
      // 执行搜索逻辑
      console.log('搜索内容:', searchText);
      setShowSearch(false);
      setSearchText('');
    }
  };

  return (
    <S.NavContainer>
      {!showSearch ? (
        <>
          {tabs.map((tab) => (
            <S.NavItem
              key={tab.id}
              $isActive={location.pathname === tab.path}
              onClick={() => navigate(tab.path)}
            >
              {tab.label}
            </S.NavItem>
          ))}
          <S.SearchIcon onClick={() => setShowSearch(true)}>
            <SearchOutlined />
          </S.SearchIcon>
        </>
      ) : (
        <S.SearchInputContainer>
          <S.SearchInput
            ref={searchInputRef}
            type="text"
            placeholder="搜索内容..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <S.CloseIcon
            onClick={() => {
              setShowSearch(false);
              setSearchText('');
            }}
          >
            <CloseOutlined />
          </S.CloseIcon>
        </S.SearchInputContainer>
      )}
    </S.NavContainer>
  );
};

export default HomeTopNav;
