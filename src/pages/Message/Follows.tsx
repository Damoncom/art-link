import React, { useState } from 'react';
import FollowNotification from '../../components/FollowNotification/FollowNotification';
import author1 from '../../components/ArtworkCard/image/author1.jpg';
import author2 from '../../components/ArtworkCard/image/demo5.jpg';
import author3 from '../../components/ArtworkCard/image/author3.jpg';
import { Empty } from 'antd';

const Follow: React.FC = () => {
  // 模拟关注数据
  const initialFollows = [
    {
      id: 1,
      avatarUrl: author2,
      username: '艺术爱好者',
      time: '10分钟前',
      unreadCount: 1,
      isFollowingBack: false,
    },
    {
      id: 2,
      avatarUrl: author1,
      username: '绘画大师',
      time: '2小时前',
      unreadCount: 0,
      isFollowingBack: true,
    },
    {
      id: 3,
      avatarUrl: author3,
      username: '设计新秀',
      time: '昨天',
      unreadCount: 0,
      isFollowingBack: false,
    },
    {
      id: 4,
      avatarUrl: author2,
      username: '水墨艺术家',
      time: '3天前',
      unreadCount: 0,
      isFollowingBack: false,
    },
    {
      id: 5,
      avatarUrl: author1,
      username: '油画达人',
      time: '1周前',
      unreadCount: 0,
      isFollowingBack: true,
    },
  ];

  const [follows, setFollows] = useState(initialFollows);
  const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');

  // 处理回关操作
  const handleFollowBack = (id: number) => {
    setFollows(
      follows.map((follow) =>
        follow.id === id ? { ...follow, isFollowingBack: true } : follow
      )
    );
  };

  // 处理点击通知项
  const handleItemClick = (id: number) => {
    setFollows(
      follows.map((follow) =>
        follow.id === id ? { ...follow, unreadCount: 0 } : follow
      )
    );
  };

  // 筛选未读消息
  const filteredFollows =
    activeTab === 'unread'
      ? follows.filter((follow) => follow.unreadCount > 0)
      : follows;

  return (
    <div
      style={{
        width: '100%',
        // padding: '20px 15px',
        // maxWidth: '600px',
        margin: '50px auto 0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          marginBottom: '20px',
          borderBottom: '1px solid #f0f0f0',
          paddingBottom: '10px',
        }}
      >
        <button
          style={{
            padding: '8px 16px',
            marginRight: '10px',
            background: activeTab === 'all' ? '#a456dd' : 'transparent',
            color: activeTab === 'all' ? 'white' : '#666',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 500,
          }}
          onClick={() => setActiveTab('all')}
        >
          全部通知
        </button>
        <button
          style={{
            padding: '8px 16px',
            background: activeTab === 'unread' ? '#a456dd' : 'transparent',
            color: activeTab === 'unread' ? 'white' : '#666',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 500,
          }}
          onClick={() => setActiveTab('unread')}
        >
          未读通知
        </button>
      </div>

      {filteredFollows.length === 0 ? (
        <Empty
          description={
            activeTab === 'unread' ? '暂无未读关注通知' : '暂无关注通知'
          }
          style={{ marginTop: '60px' }}
        />
      ) : (
        filteredFollows.map((follow) => (
          <div
            key={follow.id}
            style={{
              position: 'relative',
              marginBottom: '15px',
            }}
          >
            <FollowNotification
              avatarUrl={follow.avatarUrl}
              username={follow.username}
              time={follow.time}
              unreadCount={follow.unreadCount}
              onClick={() => handleItemClick(follow.id)}
            />
            {!follow.isFollowingBack && (
              <button
                onClick={() => handleFollowBack(follow.id)}
                style={{
                  position: 'absolute',
                  right: '70px',
                  bottom: '24px',
                  padding: '4px 12px',
                  background: '#a556dd',
                  color: 'white',
                  border: 'none',
                  borderRadius: '15px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  zIndex: 1,
                }}
              >
                回关
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Follow;
