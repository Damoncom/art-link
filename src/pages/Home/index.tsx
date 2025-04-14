import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeTopNav from '../../components/HomeTopNav/HomeTopNav';

const Home: React.FC = () => {
  return (
    <div>
      <HomeTopNav />
      {/* 子路由内容将在此渲染 */}
      <Outlet />
    </div>
  );
};

export default Home;
