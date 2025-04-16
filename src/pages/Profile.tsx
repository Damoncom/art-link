import React from 'react';
import {
  UserOutlined,
  WalletOutlined,
  SafetyOutlined,
  BlockOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import styled from 'styled-components';
import author3 from '../components/ArtworkCard/image/author3.jpg';

export const SettingsContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 0 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const SettingsSection = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 16px;
  color: #999;
`;

export const SettingItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
`;

export const SettingIcon = styled.span`
  margin-right: 12px;
  font-size: 18px;
  color: #666;
`;

export const SettingLabel = styled.span`
  flex: 1;
  font-size: 16px;
  color: #333;
`;

export const ArrowIcon = styled.span`
  color: #999;
`;

const Profile: React.FC = () => {
  // 模拟用户数据
  const profileData = {
    avatarUrl: author3,
    name: '炒饭博主bot',
    bio: '抽象 | 宠物 | 摄影 | 家居 | 美食 | 戒酒博主！',
    isVerified: true,
    isFollowing: false,
    stats: {
      following: 0,
      followers: '77.8W',
      likes: '842.7W',
    },
  };

  // 设置项数据
  const settings = [
    {
      title: '账号信息',
      items: [
        { icon: <UserOutlined />, label: '个人资料' },
        { icon: <WalletOutlined />, label: '我的钱包' },
        { icon: <SafetyOutlined />, label: '账号与安全' },
      ],
    },
    {
      title: '隐私设置',
      items: [{ icon: <BlockOutlined />, label: '黑名单管理' }],
    },
    {
      title: '使用帮助',
      items: [
        { icon: <QuestionCircleOutlined />, label: '使用帮助' },
        { icon: <MessageOutlined />, label: '意见反馈' },
      ],
    },
    {
      title: '设备信息',
      items: [
        { icon: <DeleteOutlined />, label: '清除缓存' },
        { icon: <InfoCircleOutlined />, label: '关于' },
      ],
    },
  ];

  return (
    <div style={{ padding: '16px', paddingBottom: '70px' }}>
      <ProfileCard
        {...profileData}
        onFollowClick={() => console.log('关注/取消关注')}
      />

      <SettingsContainer>
        {settings.map((section, index) => (
          <SettingsSection key={index}>
            <SectionTitle>{section.title}</SectionTitle>
            {section.items.map((item, idx) => (
              <SettingItem key={idx}>
                <SettingIcon>{item.icon}</SettingIcon>
                <SettingLabel>{item.label}</SettingLabel>
                <ArrowIcon>
                  <RightOutlined />
                </ArrowIcon>
              </SettingItem>
            ))}
          </SettingsSection>
        ))}
      </SettingsContainer>
    </div>
  );
};

export default Profile;
