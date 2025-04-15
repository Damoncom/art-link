import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './style';

const MessageTopNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'likes', label: '赞和收藏', path: '/message/likes' },
    { id: 'follows', label: '新增关注', path: '/message/follows' },
    { id: 'comments', label: '评论和@', path: '/message/comments' },
  ];

  return (
    <S.NavContainer>
      <S.TabContainer>
        {tabs.map((tab) => (
          <S.TabItem
            key={tab.id}
            $active={location.pathname === tab.path}
            onClick={() => navigate(tab.path)}
          >
            {tab.label}
          </S.TabItem>
        ))}
      </S.TabContainer>
    </S.NavContainer>
  );
};

export default MessageTopNav;
