import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LeftOutlined,
  MoreOutlined,
  PaperClipOutlined,
  SendOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const ChatPage: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '您好，关于定制作品有什么具体要求吗？',
      sender: 'author',
      time: '10:30',
    },
    { id: 2, text: '我希望作品能体现春天的感觉', sender: 'me', time: '10:32' },
    {
      id: 3,
      text: '好的，我会在创作中加入樱花元素',
      sender: 'author',
      time: '10:33',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          sender: 'me',
          time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        },
      ]);
      setNewMessage('');
    }
  };

  return (
    <ChatContainer>
      {/* 聊天顶部栏 */}
      <ChatHeader>
        <BackButton onClick={() => navigate(-1)}>
          <LeftOutlined />
        </BackButton>
        <ChatTitle>炒饭博主bot</ChatTitle>
        <MoreOptions>
          <MoreOutlined />
        </MoreOptions>
      </ChatHeader>

      {/* 聊天内容区域 */}
      <MessagesContainer>
        {messages.map((message) => (
          <MessageBubble key={message.id} $isMe={message.sender === 'me'}>
            <MessageText>{message.text}</MessageText>
            <MessageTime>{message.time}</MessageTime>
          </MessageBubble>
        ))}
      </MessagesContainer>

      {/* 消息输入框 */}
      <InputContainer>
        <AttachmentButton>
          <PaperClipOutlined />
        </AttachmentButton>
        <MessageInput
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="输入消息..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <SendButton onClick={handleSendMessage}>
          <SendOutlined />
        </SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

// 样式组件
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto 50px auto;
  background-color: #f5f5f5;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

const BackButton = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-right: 12px;
`;

const ChatTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  flex: 1;
  text-align: center;
`;

const MoreOptions = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 12px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const MessageBubble = styled.div<{ $isMe: boolean }>`
  max-width: 70%;
  padding: 10px 14px;
  margin-bottom: 12px;
  border-radius: ${(props) =>
    props.$isMe ? '18px 18px 0 18px' : '18px 18px 18px 0'};
  background-color: ${(props) => (props.$isMe ? '#a456dd' : 'white')};
  color: ${(props) => (props.$isMe ? 'white' : '#333')};
  align-self: ${(props) => (props.$isMe ? 'flex-end' : 'flex-start')};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const MessageText = styled.div`
  font-size: 15px;
  margin-bottom: 4px;
`;

const MessageTime = styled.div`
  font-size: 11px;
  color: inherit;
  opacity: 0.7;
  text-align: right;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 12px 16px;
  background-color: white;
  border-top: 1px solid #f0f0f0;
  align-items: center;
`;

const AttachmentButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  margin-right: 12px;
`;

const MessageInput = styled.input`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 10px 16px;
  font-size: 15px;
  outline: none;
  &:focus {
    border-color: #a456dd;
  }
`;

const SendButton = styled.button`
  background: #a456dd;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  cursor: pointer;
`;

export default ChatPage;
