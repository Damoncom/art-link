import React from 'react';
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import CartTopNav from '../components/CartTopNav/CartTopNav';
import OrderCard from '../components/OrderCard/OrderCard';
import author2 from '../components/ArtworkCard/image/author2.jpg';
import demo3 from '../components/ArtworkCard/image/demo3.jpg';
import type { OrderCardProps } from '../components/OrderCard/OrderCard';

const Cart: React.FC = () => {
  const navigate = useNavigate();

  const orders: Array<OrderCardProps> = [
    {
      orderId: '1',
      artworkImage: author2,
      artworkName: '绒毛獭兔 X Marsper.追梦系列-紫趣',
      price: 199,
      quantity: 1,
      orderTime: '2025-04-09 14:30',
      status: 'pending', // 现在会被识别为正确的联合类型
      creationPeriod: '7天',
    },
    {
      orderId: '2',
      artworkImage: demo3,
      artworkName: '玛格尔酒庄葡萄花 X Concert.M.08042系列',
      price: 599,
      quantity: 2,
      orderTime: '2025-03-03 18:39',
      status: 'completed', // 现在会被识别为正确的联合类型
      creationPeriod: '21天',
    },
  ];

  const handleOrderClick = () => {
    navigate(`/cart/orderDetail`);
  };

  return (
    <div>
      <CartTopNav />
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{ margin: '66px 0 0 0' }}
              onClick={() => handleOrderClick()}
            >
              {orders.map((order) => (
                // TODO: 类型bug
                <OrderCard key={order.orderId} {...order} />
              ))}
            </div>
          }
        />
        <Route path="all" element={<Outlet />} />
        <Route path="pending" element={<Outlet />} />
        <Route path="creating" element={<Outlet />} />
        <Route path="completed" element={<Outlet />} />
        <Route path="after-sale" element={<Outlet />} />
      </Routes>
    </div>
  );
};

export default Cart;
