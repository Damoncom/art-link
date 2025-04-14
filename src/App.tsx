import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { BottomNav } from './components/BottomNav/BottomNav';
import Home from './pages/Home';
import Discover from './pages/Home/Discover'; // 新增
import Following from './pages/Home/Following'; // 新增
import Like from './pages/Like';
import Message from './pages/Message';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import {
  HomeOutlined,
  HeartOutlined,
  MailOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';

const App: React.FC = () => {
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
    <Router>
      <div
        style={{
          paddingBottom: '60px',
          minHeight: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />}>
            <Route index element={<Navigate to="discover" replace />} />
            <Route path="discover" element={<Discover />} />
            <Route path="following" element={<Following />} />
          </Route>
          <Route path="/like" element={<Like />} />
          <Route path="/message" element={<Message />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* 其他路径重定向到根 */}
        </Routes>
      </div>
      <BottomNav items={navItems} />
    </Router>
  );
};

export default App;
