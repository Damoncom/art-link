import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LeftOutlined,
  PhoneOutlined,
  MessageOutlined,
  CheckCircleOutlined,
  EditOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
  DownloadOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import author3 from '../components/ArtworkCard/image/author3.jpg';
import demo3 from '../components/ArtworkCard/image/demo3.jpg';

const TrackingProcess: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [watermarkedImage, setWatermarkedImage] = useState('');

  const steps = [
    {
      id: 0,
      name: '需求确认',
      image: demo3,
      description: '已确认您的定制需求',
      date: '2025-04-10',
    },
    {
      id: 1,
      name: '创作中',
      image: author3,
      description: '艺术家正在创作您的作品',
      date: '2025-04-15',
    },
    {
      id: 2,
      name: '已完成',
      image: demo3,
      description: '作品已完成',
      date: '2025-04-25',
    },
  ];

  const addWatermark = (imageUrl: string, callback: (url: string) => void) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        // 绘制原始图片
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // 设置水印样式
        ctx.font = 'bold 40px Arial';
        ctx.fillStyle = '#a556dda9';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // 旋转并重复绘制水印
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(-Math.PI / 4);

        // 调整这两个数值来改变水印间距
        const horizontalSpacing = 500; // 横向间距（增大此值会使水印更稀疏）
        const verticalSpacing = 150; // 纵向间距

        // 绘制密集水印
        for (
          let x = -canvas.width;
          x < canvas.width * 2;
          x += horizontalSpacing
        ) {
          for (
            let y = -canvas.height;
            y < canvas.height * 2;
            y += verticalSpacing
          ) {
            ctx.fillText('炒饭博主bot  定制稿件', x, y);
            ctx.fillText('严禁盗用', x, y + 50); // 这里的50是两行文字间的垂直间距
          }
        }

        ctx.restore();
        callback(canvas.toDataURL('image/jpeg'));
      }
    };
  };

  const handleDownload = () => {
    // 下载原始图片（无水印）
    const link = document.createElement('a');
    link.href = steps[activeStep].image;
    link.download = `artwork-${steps[activeStep].name}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleViewer = () => {
    if (!isViewerOpen) {
      addWatermark(steps[activeStep].image, (watermarkedUrl) => {
        setWatermarkedImage(watermarkedUrl);
      });
    }
    setIsViewerOpen(!isViewerOpen);
    setScale(1);
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.1, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5));

  // 为StepImage添加水印
  const [stepImageWithWatermark, setStepImageWithWatermark] = useState('');
  useEffect(() => {
    addWatermark(steps[activeStep].image, (watermarkedUrl) => {
      setStepImageWithWatermark(watermarkedUrl);
    });
  }, [activeStep]);

  return (
    <PageContainer>
      {/* 顶部导航栏 */}
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <LeftOutlined />
        </BackButton>
        <Title>定制过程追踪</Title>
      </Header>

      {/* 进度条 */}
      <ProgressContainer>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <Step onClick={() => setActiveStep(index)}>
              <StepIcon $active={activeStep === index}>
                {index === 0 && <EditOutlined style={{ fontSize: '16px' }} />}
                {index === 1 && (
                  <ClockCircleOutlined style={{ fontSize: '16px' }} />
                )}
                {index === 2 && (
                  <CheckCircleOutlined style={{ fontSize: '16px' }} />
                )}
              </StepIcon>
              <StepName $active={activeStep === index}>{step.name}</StepName>
              <StepDate>{step.date}</StepDate>
            </Step>
            {index < steps.length - 1 && (
              <StepArrow>
                <ArrowRightOutlined style={{ color: '#ccc' }} />
              </StepArrow>
            )}
          </React.Fragment>
        ))}
      </ProgressContainer>

      {/* 当前步骤详情 */}
      <StepDetail>
        <StepImage
          src={stepImageWithWatermark || steps[activeStep].image}
          onClick={toggleViewer}
          style={{ cursor: 'pointer' }}
        />
        <StepDescription>
          <div
            style={{
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#a456dd',
            }}
          >
            {steps[activeStep].name}
          </div>
          <div>{steps[activeStep].description}</div>
        </StepDescription>
      </StepDetail>

      {/* 图片查看器模态框 */}
      {isViewerOpen && watermarkedImage && (
        <ImageViewerOverlay>
          <ImageViewerContainer>
            <img
              src={watermarkedImage}
              style={{
                transform: `scale(${scale})`,
                maxWidth: '100%',
                maxHeight: '80vh',
                display: 'block',
              }}
              alt="带水印的作品预览"
            />
            <ImageControls>
              <ControlButton onClick={zoomIn}>
                <ZoomInOutlined />
              </ControlButton>
              <ControlButton onClick={zoomOut}>
                <ZoomOutOutlined />
              </ControlButton>
              <ControlButton onClick={handleDownload}>
                <DownloadOutlined />
              </ControlButton>
              <ControlButton onClick={toggleViewer}>
                <CloseOutlined />
              </ControlButton>
            </ImageControls>
          </ImageViewerContainer>
        </ImageViewerOverlay>
      )}

      {/* 订单卡片 */}
      <ProductCard>
        <ProductImage src={demo3} />
        <ProductInfo>
          <ProductName>玛格尔酒庄葡萄花 X Concert.M.08042系列</ProductName>
          <ProductPrice>
            ¥599{' '}
            <span
              style={{ color: '#999', position: 'absolute', right: '25px' }}
            >
              x2
            </span>
          </ProductPrice>
        </ProductInfo>
        <TotalPrice>共计1件 应付：¥1198.00</TotalPrice>
      </ProductCard>

      {/* 作者信息卡 */}
      <AuthorCard>
        <AuthorHeader>
          <Avatar src={author3} />
          <AuthorInfo>
            <AuthorName>
              炒饭博主bot <VerifiedBadge>🍀️</VerifiedBadge>
              <FollowedBadge>已关注</FollowedBadge>
            </AuthorName>
            <AuthorTags>
              抽象 | 宠物 | 摄影 | 家居 | 美食 | 戒酒博主！
            </AuthorTags>
          </AuthorInfo>
        </AuthorHeader>
        <AuthorContact>
          <PhoneInfo>
            <PhoneOutlined style={{ marginRight: '5px' }} />
            189123456789
          </PhoneInfo>

          <ChatButton onClick={() => navigate('/chat')}>
            <MessageOutlined /> 讨论
          </ChatButton>
        </AuthorContact>
      </AuthorCard>
    </PageContainer>
  );
};

// 新增样式组件
const ImageViewerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ImageViewerContainer = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageControls = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 30px;
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

// 其他样式组件保持不变...

// 样式组件
const PageContainer = styled.div`
  padding: 0 16px;
  max-width: 600px;
  margin: 0 auto;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`;

const BackButton = styled.div`
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  flex: 1;
  margin: 0;
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 20px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const StepIcon = styled.div<{ $active: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? '#a456dd' : '#f0f0f0')};
  color: ${(props) => (props.$active ? 'white' : '#666')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  svg {
    font-size: 16px;
  }
`;

const StepName = styled.div<{ $active: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.$active ? '#a456dd' : '#666')};
  font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
`;

const StepDate = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 4px;
`;

const StepArrow = styled.div`
  color: #ccc;
  margin: 0 5px;
`;

const StepDetail = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const StepImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const StepDescription = styled.div`
  color: #333;
  font-size: 14px;
`;

// 从OrderDetail复用的样式组件
const AuthorCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 82px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const AuthorHeader = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const VerifiedBadge = styled.span`
  margin-left: 4px;
  font-size: 14px;
`;

const FollowedBadge = styled.span`
  margin-left: 8px;
  font-size: 12px;
  color: #666;
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 10px;
`;

const AuthorTags = styled.div`
  color: #666;
  font-size: 14px;
`;

const AuthorContact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`;

const PhoneInfo = styled.div`
  display: flex;
  align-items: center;
  color: #666;
`;

const ChatButton = styled.button`
  background: #a456dd;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const ProductInfo = styled.div`
  margin-bottom: 12px;
`;

const ProductName = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const ProductPrice = styled.div`
  color: #a456dd;
  font-size: 16px;
`;

const TotalPrice = styled.div`
  text-align: right;
  font-weight: bold;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`;

export default TrackingProcess;
