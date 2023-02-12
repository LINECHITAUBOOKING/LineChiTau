import React, { useState, useEffect, useContext } from 'react';
import '../layout/payment.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useOutletContext,
  useNavigate,
} from 'react-router-dom';
import ProgressBar from '../PaymentComponent/ProgressBar/ProgressBar';

import PurchaseItem from '../PaymentComponent/PurchaseItem';
import ContactPerson from '../PaymentComponent/ContactPerson/ContactPerson';
import UseDiscount from '../PaymentComponent/UseDiscount/UseDiscount';
import SubTotalList from '../PaymentComponent/SubTotalList/SubTotalList';
import { JwtCsrfTokenContext } from '../../../utils/csrf-hook/useJwtCsrfToken';
import axios from 'axios';

const TravelPaymentDetail = (props) => {
  const currentStep = 2;

  const { jwtToken, userF, jwtDecodedData } = useContext(JwtCsrfTokenContext);
  const navigate = useNavigate();
  const moment = require('moment');

  const userEmail = jwtDecodedData.email;
  const orderIdNum = Date.now();
  const orderId = 'NH' + orderIdNum;
  const orderDate = moment(orderIdNum).format('YYYY-MM-DD HH:mm:ss');

  const storage = localStorage;
  const cartStorage = storage.getItem('cart');
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsToPay, setCartItemsToPay] = useState([]);
  const [cartItemsLength, setCartItemsLenght] = useState(cartItems.length);
  const [cartItemsTotalPrice, setCartItemsTotalPrice] = useState(0);
  const [itemDetail, setItemDetail] = useState({});
  const [finalPrice, setFinalPrice] = useState(0);

  const [userCoupon, setUserCoupon] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [discountId, setDiscountId] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  const updateValue = {
    // setAmountA: (value) => {
    //   setAmountA(value);
    // },
    setDiscountPrice: (value) => {
      setDiscountPrice(value);
    },
    setFinalPrice: (value) => {
      setFinalPrice(value);
    },
    setDiscount: (value) => {
      setDiscount(value);
    },
    setDiscountId: (value) => {
      setDiscountId(value);
    },
    setCartItems: (value) => {
      setCartItems(value);
    },
    setCartItemsToPay: (value) => {
      setCartItemsToPay(value);
    },
    setItemDetail: (value) => {
      setItemDetail(value);
    },
  };

  useEffect(() => {
    if (cartStorage === []) {
      setCartItems([]);
    } else {
      setCartItems(JSON.parse(storage.getItem('cart')));
    }

    async function getUserCoupons() {
      let response = await axios.get(
        `http://localhost:3001/api/payment/Detail/Hotel/userCoupons/${jwtDecodedData.email}`
      );
      console.log('=====userCoupon====', response.data);
      setUserCoupon(response.data);
    }
    getUserCoupons();
  }, []);
  useEffect(() => {
    storage.setItem('cart', JSON.stringify(cartItems));
    const cartPrice = cartItems
      .map((cartItem, index) => {
        // console.log('item map', cartItem);
        // console.log('item map totalPrice', typeof cartItem.totalPrice);
        // setCartItemsTotalPrice(cartItemsTotalPrice + cartItem.totalPrice);
        // console.log('price map', cartItemsTotalPrice);
        return cartItem.totalPrice;
      })
      .reduce((acc, cur) => acc + cur, 0);
    setCartItemsTotalPrice(cartPrice);
    setFinalPrice(cartPrice);
  }, [cartItems]);
  useEffect(() => {
    async function getUseCoupon() {
      let response = await axios.get(
        `http://localhost:3001/api/payment/Detail/Hotel/coupon/${discountId}`
      );
      console.log(
        'getUseCoupongetUseCoupongetUseCoupongetUseCoupon',
        response.data
      );
      setDiscount(response.data[0].discount);
      // console.log('=======discount======', response.data[0].discount);
      // setFinalPrice(finalPrice * (discount / 10));
      // console.log('被打 finalPrice-gb', finalPrice);
      // console.log('被打 discount-gb', discount / 10);
      // console.log('被打-gb', finalPrice * (discount / 10));
    }
    getUseCoupon();
    console.log('被打 finalPrice', finalPrice);
    console.log('被打 discount', discount / 10);
    console.log('被打', finalPrice * (discount / 10));
  }, [discountId]);
  // useEffect(() => {
  //   setFinalPrice(finalPrice);
  // }, [finalPrice]);

  async function handleSubmit(e) {
    e.preventDefault();
    // !關閉表單預設行為
    if (userEmail !== '') {
      let orderData = {
        userEmail: userEmail,
        orderIdNum: orderIdNum,
        orderDate: orderDate,
        formData: {},

        product: cartItems,
        totalPrice: cartItemsTotalPrice,
        amount: cartItemsLength,

        discount: discount,
        discountId: discountId,
      };
      console.log(
        '=================handleSubmit===================:',
        orderData
      );
      // * ajax
      try {
        let response = await axios.post(
          'http://localhost:3000/api/payment/Detail/Hotel/order',
          orderData
        );

        navigate(`/payment/Hotel/CheckOut/${orderId}`);
      } catch (e) {
        alert('order go go ');
      }
      storage.removeItem('hotelRoom');
    } else {
      alert('請先登入後再繼續購買流程');
      navigate(`/login1`);
    }
  }

  console.log('paDetail cartItemsTotalPrice', cartItemsTotalPrice);
  console.log('payDetial discount', discount);
  console.log('payDetialID discountId', discountId);

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
            {cartItems.length > 0 ? (
              <PurchaseItem
                cartItems={cartItems}
                cartItemsToPay={cartItemsToPay}
                updateValue={updateValue}
              />
            ) : (
              <div className="d-flex justify-content-center align-items-center my-heading">
                購物車為空，快去加入商品吧!
              </div>
            )}

            {/* <!-- NOTE 聯絡資料 --> */}
            <div className="item-section row col-12  my-3">
              <ContactPerson />
            </div>
            {/* <!-- NOTE 折扣 --> */}
            <UseDiscount
              userCoupon={userCoupon}
              updateValue={updateValue}
              discountId={discountId}
              discount={discount}
            />
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
            {/* NOTE <!-- * total小計 --> */}
            <SubTotalList
              cartItems={cartItems}
              cartItemsTotalPrice={cartItemsTotalPrice}
              discountId={discountId}
              discount={discount}
              discountPrice={discountPrice}
              finalPrice={finalPrice}
              updateValue={updateValue}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default TravelPaymentDetail;
