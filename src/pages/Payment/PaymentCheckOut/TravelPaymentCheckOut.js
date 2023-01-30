import React from 'react';
import './TravelPaymentCheckOut.scss';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import ProductImg from '../../Hotel/img/banner.svg';
import PaymentMethod from '../PaymentComponent/PaymentMethod/PaymentMethod';
import CheckOutItemList from '../PaymentComponent/CheckOutItemList/CheckOutItemList';
import CheckOutCreditCard from '../PaymentComponent/CheckOutCreditCard/CheckOutCreditCard';
import UseDiscount from '../PaymentComponent/UseDiscount/UseDiscount';

const TravelPaymentCheckOut = () => {
  return (
    <>
      <main className="container main-width px-0">
        {/* <!-- TODO 付款方式、小計TOTAL清單 --> */}
        <div className=" row w-100 px-0 mx-0 ">
          <div className="col-4 ps-0 my-3">
            <PaymentMethod />
          </div>
          <div className="col-8 pe-0 my-3">
            <CheckOutItemList/>
          </div>
        </div>
        {/* <!-- TODO 付款方式資料 --> */}
        <div className=" row w-100 px-0 mx-0">
          <div className="col-12 px-0">
            <div className="payment-detail d-flex flex-column mb-3 px-5 ">
              <div className="contact-title d-flex align-items-center justify-content-between my-3 px-0">
                <h3 className="title">填寫付款資料</h3>
                <button className="my-card-btn d-flex align-items-center justify-content-around  ">
                  <span className="material-symbols-rounded">credit_card</span>
                  <span>我的信用卡</span>
                </button>
              </div>
              <CheckOutCreditCard/>
              <div className="notice w-100 py-3 text-right">
                <h5 className="d-flex justify-content-end">
                  本訂單無須CVC 安全碼
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- TODO 折扣 --> */}
        <UseDiscount/>
        {/* <!-- TODO 注意事項 --> */}
        {/* <!-- NOTE 同意條款 --> */}
        <div className="rule-section  col-12 pb-5">
          <div className="argee px-1 py-3 d-flex align-items-center">
            <input type="checkbox" name="" id="" className="mx-2" />
            我了解並同意來七桃服務條款與隱私權政策
          </div>
          <div className="d-flex justify-content-between">
            <div className="alert alert-danger m-0 col-8">
              請確認訂單填寫無誤，訂單確認後可能無法更改。
            </div>
            <button className="my-btn w-25 ">確認付款</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default TravelPaymentCheckOut;
