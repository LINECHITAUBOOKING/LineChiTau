import React, { useState } from 'react';
import '../layout/payment.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useOutletContext,
} from 'react-router-dom';
import ProgressBar from '../PaymentComponent/ProgressBar/ProgressBar';

import PurchaseItem from '../PaymentComponent/PurchaseItem';
import ContactPerson from '../PaymentComponent/ContactPerson/ContactPerson';
import UseDiscount from '../PaymentComponent/UseDiscount/UseDiscount';
import SubTotalList from '../PaymentComponent/SubTotalList/SubTotalList';

const TravelPaymentDetail = (props) => {
  const currentStep = 2;
  const storage = localStorage;
  const cartStorage = storage.getItem('cart');
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsToPay, setCartItemsToPay] = useState([]);
  const [cartItemsLength, setCartItemsLenght] = useState(cartItems.length);
  const [cartItemsTotalPrice, setCartItemsTotalPrice] = useState(0);
  const [itemDetail, setItemDetail] = useState({});

  return (
    <>
      <ProgressBar currentStep={currentStep} />

      <main className="container  pe-0 main-width">
        <div className=" d-flex p-0">
          {/* <!-- TODO 項目(左區塊) --> */}
          <div className="item-list  col-8  gy-5 ">
            {/* <!-- NOTE 購買項目  --> */}
            <div className="item-section pb-0 row col-12  mt-3 rounded-0 rounded-top ">
              <div className="contact-title d-flex align-items-center p-0">
                <h3 className="title">購買清單</h3>
              </div>
            </div>

            <PurchaseItem cartItems={cartItems} />

            {/* <!-- NOTE 聯絡資料 --> */}
            <div className="item-section row col-12  my-3">
              <ContactPerson />
            </div>
            {/* <!-- NOTE 折扣 --> */}

            {/* <UseDiscount /> */}
            {/* NOTE <!-- * 同意條款 --> */}
            <div className="rule-section  row col-12 pb-5">
              <div className="argee px-1 pb-3 d-flex align-items-center">
                <input type="checkbox" name="" id="" className="mx-2" />
                我了解並同意來七桃服務條款與隱私權政策
              </div>
              <div className="alert alert-danger m-0">
                請確認訂單填寫無誤，訂單確認後可能無法更改。
              </div>
            </div>
          </div>

          {/* NOTE <!-- TODO 小清單(右區塊) --> */}
          <div className="sub-list col-4 mx-0">
            {/* NOTE <!-- * 項目各自小計 --> */}
            <div className="sub-section d-flex flex-column my-3 px-3 py-3">
              <div className="sub-detail p-3 mb-2">
                <h5>行程/門票名</h5>
                <p>方案項目:九份一日遊</p>
                <h5>日期:2029/01/21</h5>
                <h5>數量: x1</h5>
              </div>
              <div className="sub-price d-flex justify-content-between  ">
                小計 :<span>1234 元</span>
              </div>
            </div>
            <div className="sub-section d-flex flex-column my-3 px-3 py-3">
              <div className="sub-detail p-3 mb-2">
                <h5>行程/門票名</h5>
                <p>方案項目:九份一日遊</p>
                <h5>日期:2029/01/21</h5>
                <h5>數量: x1</h5>
              </div>
              <div className="sub-price d-flex justify-content-between  ">
                小計 :<span>1234 元</span>
              </div>
            </div>

            {/* NOTE <!-- * total小計 --> */}
            <SubTotalList />
          </div>
        </div>
      </main>
    </>
  );
};

export default TravelPaymentDetail;
