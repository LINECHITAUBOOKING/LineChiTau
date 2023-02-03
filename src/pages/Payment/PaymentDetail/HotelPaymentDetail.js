import React, { useEffect, useState } from 'react';
import '../layout/payment.scss';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import axios from 'axios';

import './HotelPaymentDetail.scss';
import ProgressBar from '../PaymentComponent/ProgressBar/ProgressBar';
import ProductImg from '../../Hotel/img/banner.svg';
import RoomItem from '../PaymentComponent/RoomItem/RoomItem';
import RoomItemHotel from '../PaymentComponent/RoomItemHotel/RoomItemHotel';
import RoomService from '../PaymentComponent/RoomServiceRule/RoomService';
import RoomRule from '../PaymentComponent/RoomServiceRule/RoomRule';
import RoomBooker from '../PaymentComponent/RoomBooker/RoomBooker';
import RoomMemo from '../PaymentComponent/RoomMemo/RoomMemo';
import UseDiscount from '../PaymentComponent/UseDiscount/UseDiscount';
import RoomArriveTime from '../PaymentComponent/RoomArriveTime/RoomArriveTime';

const HotelPaymentDetail = (props) => {
  const currentStep = 2;

  const storage = localStorage;
  const hotelName = storage.getItem('companyName');
  const roomName = storage.getItem('roomName');
  const [hotelDetail, setHotelDetail] = useState({});
  const [paymentRoomDetail, setPaymentRoomDetail] = useState([]);
  const ordersItem = JSON.parse(storage.getItem('orderItem'));
  const orderItem = ordersItem[0];

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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [country, setCountry] = useState('');
  const [lang, setLang] = useState('');
  const name = lastName + firstName;
  const date = Date();
  // NOTE 假價格
  const price = 1000;
  const amount = 1000;
  console.log('asjdioasjdoaisoihafoawu', date);
  async function handleSubmit(e) {
    console.log('handleSubmit');
    // !關閉表單預設行為
    e.preventDefault();

    // * ajax
    let response = await axios.post(
      'http://localhost:3001/api/paymentHotelDetail/order',
      {
        name,
        email,
        tel,
        country,
        lang,
        date,
        price,
      }
    );
    console.log(response.data);
  }
  console.log('ooooorrerder', ordersItem);
  console.log('XXXXXXXXXrrerder', orderItem);
  return (
    <>
      <ProgressBar currentStep={currentStep} />
      <main className="container main-width px-0">
        {/* <!-- TODO 訂房商品資訊、飯店+房型+訂房規則--> */}
        <div className="row my-3 mx-0 justify-content-between">
          {/* <!-- NOTE  訂房商品資訊--> */}
          <div className="col-4 p-0">
            <RoomItem
              paymentRoomDetail={paymentRoomDetail}
              orderItem={orderItem}
            />
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
        <div className="row w-100 mx-0 mb-3  ">
          <UseDiscount />
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
          <button
            className=" my-btn col text-decoration-none mx-1"
            onClick={handleSubmit}
          >
            <Link
              className="text-decoration-none "
              to={'/payment/Hotel/CheckOut'}
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
