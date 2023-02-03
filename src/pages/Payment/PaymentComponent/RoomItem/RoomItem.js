import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useOutletContext,
  useNavigate,
} from 'react-router-dom';
import axios from 'axios';

const RoomItem = (props) => {
  const navigate = useNavigate();
  const totalDate = 12 - 5;
  const amount = 3;
  const paymentRoomDetail = props.paymentRoomDetail;
  console.log('房間名', paymentRoomDetail);
  console.log('type of paymentRoomDetail', typeof paymentRoomDetail);
  return (
    <>
      <div className="order-info px-4 py-3 h-100">
        <h4 className="title my-3 mb-4">您的住房資訊</h4>
        <div className="check-time row mb-4 justify-content-between">
          <div className="col-6">
            <div className="check-in-time order-info-detail align-items-center px-3 py-2 ">
              <h6>入住時間</h6>
              <div className="checkin-datetime d-flex flex-column">
                <span>{props.orderItem.startDate}</span>
                <small>15:00起</small>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="check-out-time order-info-detail align-items-center  px-3 py-2">
              <h6>退房時間</h6>
              <div className="checkout-datetime d-flex flex-column">
                <span>{props.orderItem.endDate}</span>
                <small>12:00前</small>
              </div>
            </div>
          </div>
        </div>
        <div className=" row justify-content-around  mb-4">
          <div className="col-12">
            <div className="room-chosen order-info-detail  px-3  py-5">
              <h5>已選擇：</h5>
              <div className="chosen-room d-flex justify-content-around align-items-center">
                <span>{paymentRoomDetail.room}</span>
                <span>{props.orderItem.amount} 間</span>
                {/* NOTE 回到商品頁/上一頁 */}
                <Link
                  className="text-decoration-none d-flex align-items-center"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  <button className="change-chosen my-edit-btn d-flex align-items-center justify-content-center">
                    更改選擇
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <div className="sub order-info-detail py-3  ">
              <div className="sub-days sub-price bg-transparent row">
                <span className="col-4"> 總共入住：</span>{' '}
                {/* NOTE 退房-入住 */}
                <span className="col-auto">{totalDate} 晚</span>
              </div>
              <div className="sub-price bg-transparent row ">
                <span className="col-4">價格：</span>
                <span className="col-auto">
                  NT$ {paymentRoomDetail.price} / 間
                </span>
              </div>
              <div className="sub-price bg-transparent row ">
                <span className="col-4">小計：</span>
                <span className="col-auto">
                  NT$ {paymentRoomDetail.price * amount * totalDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomItem;
