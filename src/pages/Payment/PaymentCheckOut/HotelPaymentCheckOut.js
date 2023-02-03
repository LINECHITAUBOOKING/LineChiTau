import React, { useState, useEffect } from 'react';
import './HotelPaymentCheckOut.scss';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import ProductImg from '../../Hotel/img/banner.svg';
import ProgressBar from '../PaymentComponent/ProgressBar/ProgressBar';

import Modal from 'react-bootstrap/Modal';
import { ModalTitle } from 'react-bootstrap';
import RoomItem from '../PaymentComponent/RoomItem/RoomItem';
import RoomItemHotel from '../PaymentComponent/RoomItemHotel/RoomItemHotel';
import RoomBooker from '../PaymentComponent/RoomBooker/RoomBooker';
import RoomService from '../PaymentComponent/RoomServiceRule/RoomService';
import RoomRule from '../PaymentComponent/RoomServiceRule/RoomRule';
import RoomMemo from '../PaymentComponent/RoomMemo/RoomMemo';
import CheckOutCreditCard from '../PaymentComponent/CheckOutCreditCard/CheckOutCreditCard';
import PaymentMethod from '../PaymentComponent/PaymentMethod/PaymentMethod';
import UserData from '../PaymentComponent/UserData/UserData';

const HotelPaymentCheckOut = () => {
  const currentStep = 3;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <ProgressBar currentStep={currentStep} />

      <main className="container main-width px-0">
        {/* <!-- TODO 訂房商品資訊、飯店+房型+訂房個資--> */}
        <div className="row w-100 my-3  mx-0 px-0">
          {/* <!-- NOTE  訂房商品資訊--> */}
          <div className="col-4 p-0 mx-0">
            <RoomItem paymentRoomDetail={paymentRoomDetail} />
          </div>
          {/* <!-- NOTE  飯店+房型+訂房規則--> */}
          <div className="col-8  p-0 h-100 mx-0">
            {/* <!-- NOTE 飯店名 --> */}
            <div className="hotel-room-profile ms-3 ">
              <RoomItemHotel paymentRoomDetail={paymentRoomDetail} />
              <div className="room-info   px-3 pb-5">
                {/* <!-- NOTE 房型服務資訊 --> */}
                <RoomService paymentRoomDetail={paymentRoomDetail} />
                <RoomRule />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- TODO 付款方式、MEMO --> */}
        <div className="row w-100 mb-3 mx-0">
          {/* <!-- NOTE 選擇付款方式 --> */}
          <div className="col-4 p-0 ">
            <UserData />
          </div>
          <div className="col-8 p-0 d-flex">
            {/* <!-- NOTE MEMO+ARRIVE --> */}
            <RoomMemo />
            {/* <!-- NOTE 抵達時間 資訊 --> */}
            <div className="arrive-data d-flex align-items-baseline ps-5 col-4">
              <div className=" arrive-time-data d-flex flex-column p-3">
                <h5>預計抵達時間</h5>
                12:00
                <ul>
                  <small>
                    <li> 您的客房將會在 15:00 開放辦理入住</li>
                  </small>
                  <small>
                    <li>
                      24 小時接待櫃檯－在您有需要的時候，隨時都能為您提供服務！
                    </li>
                  </small>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- TODO 付款方式資料 --> */}
        <div className=" row w-100 mx-0">
          <div className="col-12 p-0">
            <div className="payment-detail d-flex flex-column mb-3 px-5 ">
              <div className="contact-title d-flex align-items-center justify-content-between my-3 px-0 pt-3">
                <h3 className="title">填寫付款資料</h3>
                <button className="my-btn d-flex align-items-center justify-content-around  ">
                  <span className="material-symbols-rounded">credit_card</span>
                  <span>我的信用卡</span>
                </button>
              </div>
              <CheckOutCreditCard />
              <div className="notice w-100 py-3 text-right">
                <h5 className="d-flex justify-content-end">
                  本訂單無須CVC 安全碼
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- TODO 提醒 --> */}
        <div className="row w-100 mb-3 mx-0">
          {/* <!-- TODO 提醒--> */}
          <div className=" memo-form col-12 d-flex justify-content-center align-items-center px-5 py-4  mb-3">
            <h4 className="my-0">計畫有變？</h4>
            <ul className="my-0">
              <li className="">
                {' '}
                別擔心，在2022年12月19日之前您都可以隨需要更改日期，
                房客詳細資料，新增特別要求或者取消預定。
              </li>
            </ul>
          </div>
          {/* <!-- TODO 分析與情報通知 --> */}
          <div className="col-4 p-0">
            <div className=" memo-form  d-flex justify-content-center align-items-center px-5 py-4">
              <span>
                所選日期台北住宿數量有限：
                <br />1 間相似的五星級飯店於本站已無法預訂
              </span>
            </div>
          </div>
          <div className="col-8 p-0 ps-3">
            <div className="memo-form h-100">
              <div className="notice px-5 d-flex flex-column">
                <div className="poicy py-2 d-flex justify-content-end align-items-center">
                  <div className="checked   py-1 ">
                    <input type="checkbox" name="" id="" className=" mx-3" />
                  </div>
                  <span className="">
                    我想優先收到<span>來七桃</span>
                    的最新優惠訊息並希望定期收到電子報。查看
                    <a href="">隱私權條款</a>以了解更多相關資訊。
                  </span>
                </div>
                <div className="poicy-argee px-5 py-2">
                  <input type="checkbox" name="" id="" className="mx-3" />
                  是，我同意接收 來七桃行銷電子報，通知我來七桃優惠資訊。
                </div>
              </div>
            </div>
          </div>
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
              確認付款
            </Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default HotelPaymentCheckOut;
