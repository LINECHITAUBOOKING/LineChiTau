import React, { useEffect, useState } from 'react';
import '../layout/payment.scss';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import axios from 'axios';

import './HotelPaymentDetail.scss';
import ProductImg from '../../Hotel/img/banner.svg';
import RoomItem from '../PaymentComponent/RoomItem/RoomItem';
import RoomItemHotel from '../PaymentComponent/RoomItemHotel/RoomItemHotel';
import RoomService from '../PaymentComponent/RoomServiceRule/RoomService';
import RoomRule from '../PaymentComponent/RoomServiceRule/RoomRule';
import RoomBooker from '../PaymentComponent/RoomBooker/RoomBooker';
import RoomMemo from '../PaymentComponent/RoomMemo/RoomMemo';
import RoomArriveTime from '../PaymentComponent/RoomArriveTime/RoomArriveTime';

const HotelPaymentDetail = (props) => {
  const storage = localStorage;
  const hotelName = storage.getItem('companyName');
  const roomName = storage.getItem('roomName');
  const [hotelDetail, setHotelDetail] = useState({});
  const [paymentRoomDetail, setPaymentRoomDetail] = useState([]);

  useEffect(() => {
    async function getHotelDetail() {
      let response = await axios.get(
        `http://localhost:3001/api/hotelDetail/${hotelName}`
      );
      // console.log(response.data[0]);
      setHotelDetail(response.data[0]);
    }
    async function getRoomDetail() {
      let response = await axios.get(
        `http://localhost:3001/api/paymentHotelDetail/${hotelName}/${roomName}`
      );
      // console.log(response.data);
      setPaymentRoomDetail(response.data[0]);
    }
    getHotelDetail();
    getRoomDetail();
  }, []);

  return (
    <>
      <main className="container main-width px-0">
        {/* <!-- TODO 訂房商品資訊、飯店+房型+訂房規則--> */}
        <div className="row my-3 mx-0 justify-content-between">
          {/* <!-- NOTE  訂房商品資訊--> */}
          <div className="col-4 p-0">
            <RoomItem paymentRoomDetail={paymentRoomDetail} />
          </div>
          {/* <!-- NOTE  飯店+房型+訂房規則--> */}
          <div className="col-8  pe-0">
            {/* <!-- NOTE 飯店名 --> */}
            <RoomItemHotel paymentRoomDetail={paymentRoomDetail} />
            <div className="room-info   p-3">
              {/* <!-- NOTE 房型服務資訊 --> */}
              <RoomService paymentRoomDetail={paymentRoomDetail} />
              <RoomRule />
            </div>
          </div>
        </div>

        {/* <!-- TODO 個人資料、MEMO --> */}
        <div className="row w-100 mx-0 mb-3">
          {/* <!-- NOTE 填寫個人資料 --> */}
          <div className="col-6 p-0">
            <RoomBooker />
          </div>
          {/* <!-- NOTE MEMO --> */}
          <div className="col-6 p-0">
            <RoomMemo />
          </div>
        </div>
        {/* <!-- TODO 預計抵達時間 --> */}
        <div className="row w-100 mx-0 mb-3 ">
          <RoomArriveTime />
        </div>
        {/* <!-- TODO 前往付款button --> */}
        <div className="topay d-flex justify-content-center w-25 mx-auto pt-4 pb-5 row ">
          <button className=" my-btn col-auto align-items-center mx-1 py-1">
            <Link
              className="text-decoration-none d-flex align-items-center"
              to={'/'}
            >
              返回<span className="material-symbols-rounded">undo</span>
            </Link>
          </button>
          <button className=" my-btn col text-decoration-none mx-1">
            <Link
              className="text-decoration-none "
              to={'/payment/HotelPaymentCheckOut'}
            >
              前往付款
            </Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default HotelPaymentDetail;
