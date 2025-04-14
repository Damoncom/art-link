import React, { useState } from 'react';
import { BottomNav } from '../BottomNavigation/BottomNav';
import {
  HomeOutlined,
  HeartOutlined,
  MailOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';

const TBBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    {
      id: 'home',
      icon: <HomeOutlined />,
      label: '首页',
      path: '/home',
    },
    {
      id: 'like',
      icon: <HeartOutlined />,
      label: '喜欢',
      path: '/like',
    },
    {
      id: 'message',
      icon: <MailOutlined />,
      label: '消息',
      path: '/message',
    },
    {
      id: 'cart',
      icon: <ShoppingCartOutlined />,
      label: '购物车',
      path: '/cart',
    },
    {
      id: 'profile',
      icon: <UserOutlined />,
      label: '我的',
      path: '/profile',
    },
  ];

  return (
    <div style={{ paddingBottom: '50px' }}>
      <BottomNav
        items={navItems}
        activeId={activeTab}
        onChange={setActiveTab}
      />
    </div>
  );
};

export default TBBar;
