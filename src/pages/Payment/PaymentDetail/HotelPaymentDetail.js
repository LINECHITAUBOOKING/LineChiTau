import React from 'react';
import '../layout/payment.scss';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
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
  const roomItems = 
    {
      roomName: '尊爵行政套房',
      startDate: '2022-10-11',
      endDate: '2022-10-12',
      amount: 2,
      price: 6000,
    }
  ;

  const itemHotel = {
    hotelName: '台北文華東方酒店',
    hotelAdd: '台北松山區敦化北路168號',
    hotelStar: 4,
  };
  const roomServiceRule = {
    service: [
      <span className="tag col-auto ms-2">早餐</span>,
      <span className="tag col-auto ms-2">迷你吧</span>,
      <span className="tag col-auto ms-2">喚醒服務</span>,
      <span className="tag col-auto ms-2">洗/烘衣服務</span>,
    ],
    rule: [
      <li>現在免付任何費用，您將於入住時付款</li>,
      <li>2022年12月18日 下午11:59前，免費取消</li>,
      <li>2022年12月19日 上午12:00起，收取新台幣60,000</li>,
    ],
  };
  return (
    <>
      <main className="container main-width px-0">
        {/* <!-- TODO 訂房商品資訊、飯店+房型+訂房規則--> */}
        <div className="row my-3 mx-0 justify-content-between">
          {/* <!-- NOTE  訂房商品資訊--> */}
          <div className="col-4 p-0">
            <RoomItem roomItem={roomItems} />
          </div>
          {/* <!-- NOTE  飯店+房型+訂房規則--> */}
          <div className="col-8  pe-0">
            {/* <!-- NOTE 飯店名 --> */}
            <RoomItemHotel itemHotel={itemHotel} />
            <div className="room-info   p-3">
              {/* <!-- NOTE 房型服務資訊 --> */}
              <RoomService roomServiceRule={roomServiceRule} />
              <RoomRule roomServiceRule={roomServiceRule} />
            </div>
          </div>
        </div>

        {/* <!-- TODO 個人資料、MEMO --> */}
        <div className="row w-100 mx-0 mb-3">
          {/* <!-- NOTE 填寫個人資料 --> */}
          <div className='col-6 p-0'>
          <RoomBooker/>
          </div>
          {/* <!-- NOTE MEMO --> */}
          <div className="col-6 p-0">
            <RoomMemo/>
          </div>
        </div>
        {/* <!-- TODO 預計抵達時間 --> */}
        <div className="row w-100 mx-0 mb-3 ">
          <RoomArriveTime/>
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
