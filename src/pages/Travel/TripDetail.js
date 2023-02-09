import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../layouts/Navbar';
const TripDetail = () => {
  return (
    <>
      商品細節
      <div>行程名</div>
      <div>計畫名</div>
      <div>時間</div>
      <div>
        <div>成人</div>
        <div>+</div>
        <div>數量</div>
        <div>-</div>
      </div>
      <div>
        <div>小孩</div>
        <div>+</div>
        <div>數量</div>
        <div>-</div>
      </div>
      <div>
        <div>老人</div>
        <div>+</div>
        <div>數量</div>
        <div>-</div>
      </div>
      
      <div>價格</div>
    </>
  );
};

export default TripDetail;
