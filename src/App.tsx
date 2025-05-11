import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { BottomNav } from './components/BottomNav/BottomNav';
import Home from './pages/Home';
import Discover from './pages/Home/Discover';
import Following from './pages/Home/Following';
import Like from './pages/Like';
import Message from './pages/Message';
import Likes from './pages/Message/Likes';
import Follows from './pages/Message/Follows';
import Comments from './pages/Message/Comments';
import Cart from './pages/Cart';
import OrderDetail from './pages/OrderDetial';
import TrackingProcess from './pages/TrackingProcess';
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
          // paddingTop: '50px',
          // paddingBottom: '60px',
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
          <Route path="/message" element={<Message />}>
            <Route index element={<Message />} />
            <Route path="likes" element={<Likes />} />
            <Route path="follows" element={<Follows />} />
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/orderDetail" element={<OrderDetail />} />
          <Route
            path="/cart/orderDetail/tracking-process"
            element={<TrackingProcess />}
          />
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
