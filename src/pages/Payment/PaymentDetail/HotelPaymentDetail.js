import React, { useEffect, useState, useContext } from 'react';
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
import { JwtCsrfTokenContext } from '../../../utils/csrf-hook/useJwtCsrfToken';
const moment = require('moment');

const HotelPaymentDetail = (props) => {
  const currentStep = 2;
  const { jwtToken, userF } = useContext(JwtCsrfTokenContext);
  console.log('user_email', userF.email);
  console.log(jwtToken);
  const storage = localStorage;
  const hotelName = storage.getItem('companyName');
  const roomName = storage.getItem('roomName');
  const [paymentRoomDetail, setPaymentRoomDetail] = useState([]);
  const ordersItem = JSON.parse(storage.getItem('orderItem'));
  const orderItem = ordersItem[0];

  useEffect(() => {
    async function getRoomDetail() {
      let response = await axios.get(
        `http://localhost:3001/api/payment/Detail/Hotel/${hotelName}/${roomName}`
      );
      // console.log(response.data);
      setPaymentRoomDetail(response.data[0]);
    }
    getRoomDetail();
  }, []);
  console.log(
    '===============paymentRoomDetail================：',
    paymentRoomDetail
  );
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(userF.email);
  const [tel, setTel] = useState('');
  const [country, setCountry] = useState('');
  const [lang, setLang] = useState('');
  const name = lastName + firstName;

  const user_email = userF.email;
  const orderDate =  moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

  const updateValue = {
    setFirstName: (value) => {
      setFirstName(value);
    },
    setLastName: (value) => {
      setLastName(value);
    },
    setEmail: (value) => {
      setEmail(value);
    },
    setTel: (value) => {
      setTel(value);
    },
    setCountry: (value) => {
      setCountry(value);
    },
    setLang: (value) => {
      setLang(value);
    },
  };
  // NOTE 假價格
  const amount = orderItem.conditions.room;
  const totalPrice = amount * paymentRoomDetail.price;
  console.log('asjdioasjdoaisoihafoawu', orderDate);
  async function handleSubmit(e) {
    e.preventDefault();
    // !關閉表單預設行為

    let orderData = {
      user_email: user_email,
      orderDate: orderDate,
      formData: {
        name: name,
        email: email,
        tel: tel,
        country: country,
        lang: lang,
      },
      product_id: paymentRoomDetail.hotel_room_list_id,
      price: paymentRoomDetail.price,
      totalPrice: totalPrice,
      amount: amount,
      startDate: orderItem.startDate,
      endDate: orderItem.endDate,
      discount: 0,
    };
    console.log('=================handleSubmit===================:', orderData);
    // * ajax
    try {
      let response = await axios.post(
        'http://localhost:3000/api/payment/Detail/Hotel/order',
        orderData
      );
      console.log(response.data);
    } catch (e) {
      alert('order go go ');
    }
  }
  console.log('ooooorrerder', ordersItem);
  console.log('XXXXXXXXXrrerder', orderItem);
  console.log('20230204', updateValue);
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
            <RoomBooker
              firstName={firstName}
              lastName={lastName}
              email={email}
              tel={tel}
              country={country}
              lang={lang}
              updateValue={updateValue}
            />
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
