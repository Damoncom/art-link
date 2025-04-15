import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import MessageTopNav from '../../components/MessageTopNav/MessageTopNav';
import DialogBox from '../../components/DialogBox/DialogBox';
import author1 from '../../components/ArtworkCard/image/author1.jpg';
import author2 from '../../components/ArtworkCard/image/demo5.jpg';

interface MessageProps {}

const Message: React.FC = ({}) => {
  // 模拟消息数据
  const messages = [
    {
      id: 1,
      avatarUrl: author1,
      username: '我是妈粉不是兄弟',
      message: '这个价格OK吗？',
      time: '10:30',
    },
    {
      id: 2,
      avatarUrl: author2,
      username: '好吃鱼鱼鱼',
      message: '老师！想约稿 (*^▽^*)',
      time: '04-07',
    },
    // 更多消息...
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '60px',
      }}
    >
      <MessageTopNav />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ width: '95%', margin: '45px 0 0 0' }}>
              {messages.map((msg) => (
                <DialogBox
                  key={msg.id}
                  avatarUrl={msg.avatarUrl}
                  username={msg.username}
                  message={msg.message}
                  time={msg.time}
                />
              ))}
            </div>
          }
        />
        <Route path="likes" element={<Outlet />} />
        <Route path="follows" element={<Outlet />} />
        <Route path="comments" element={<Outlet />} />
      </Routes>
    </div>
  );
};

export default Message;
