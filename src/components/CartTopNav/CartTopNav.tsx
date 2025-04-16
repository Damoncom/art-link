// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import * as S from './style';

// const CartNav: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const tabs = [
//     { id: 'all', label: '全部', path: '/cart/all' },
//     { id: 'pending', label: '待付款', path: '/cart/pending' },
//     { id: 'creating', label: '创作中', path: '/cart/creating' },
//     { id: 'completed', label: '已完成', path: '/cart/completed' },
//     { id: 'after-sale', label: '售后', path: '/cart/after-sale' },
//   ];

//   return (
//     <S.NavContainer>
//       <S.TabContainer>
//         {tabs.map((tab) => (
//           <S.TabItem
//             key={tab.id}
//             $active={location.pathname.includes(tab.path)}
//             onClick={() => navigate(tab.path)}
//           >
//             {tab.label}
//           </S.TabItem>
//         ))}
//       </S.TabContainer>
//     </S.NavContainer>
//   );
// };

// export default CartNav;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './style';

const CartNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'all', label: '全部', path: '/cart/all' },
    { id: 'pending', label: '待付款', path: '/cart/pending' },
    { id: 'creating', label: '创作中', path: '/cart/creating' },
    { id: 'completed', label: '已完成', path: '/cart/completed' },
    { id: 'after-sale', label: '售后', path: '/cart/after-sale' },
  ];

  // 修复选中逻辑：/cart 和 /cart/all 都选中"全部"
  const isActive = (path: string) => {
    return (
      location.pathname === path ||
      (path === '/cart/all' && location.pathname === '/cart')
    );
  };

  return (
    <S.NavContainer>
      <S.TabContainer>
        {tabs.map((tab) => (
          <S.TabItem
            key={tab.id}
            $active={isActive(tab.path)}
            onClick={() => navigate(tab.path)}
          >
            {tab.label}
          </S.TabItem>
        ))}
      </S.TabContainer>
    </S.NavContainer>
  );
};

export default CartNav;
