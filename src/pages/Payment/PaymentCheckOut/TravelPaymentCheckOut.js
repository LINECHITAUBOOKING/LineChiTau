import React, { useEffect, useState, useContext } from 'react';
import './TravelPaymentCheckOut.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
} from 'react-router-dom';
import axios from 'axios';


import ProductImg from '../../Hotel/img/banner.svg';
import ProgressBar from '../PaymentComponent/ProgressBar/ProgressBar';
import UserData from '../PaymentComponent/UserData/UserData';

import PaymentMethod from '../PaymentComponent/PaymentMethod/PaymentMethod';
import CheckOutItemList from '../PaymentComponent/CheckOutItemList/CheckOutItemList';
import CheckOutCreditCard from '../PaymentComponent/CheckOutCreditCard/CheckOutCreditCard';
import UseDiscount from '../PaymentComponent/UseDiscount/UseDiscount';
import { JwtCsrfTokenContext } from '../../../utils/csrf-hook/useJwtCsrfToken';

const moment = require('moment');


const TravelPaymentCheckOut = () => {
  const currentStep = 3;
  const { jwtToken, userF, jwtDecodedData } = useContext(JwtCsrfTokenContext);
  const { orderId } = useParams();
  let navigate = useNavigate();
  const [orderDetail, setOrderDetail] = useState([]);

  const [description, setDescription] = useState('');
  const [booker, setBooker] = useState('');

  useEffect(() => {
    console.log('orderId', orderId);
    async function getOrderDetail() {
      let response = await axios.get(
        `http://localhost:3001/api/payment/CheckOut/Travel/${orderId}`
      );
      console.log('responseDATA', response.data);
      if (!response.data[0]) return;
      setOrderDetail(response.data[0]);
      
      setDescription(response.data[0].description);
      setBooker(JSON.parse(response.data[0].description)[0].booker);
      // setHotelImg(response.data[0].hotel_img);
    }
    getOrderDetail();
    // const memo = JSON.parse(description)[0].memo;
    console.log('=-============memo======================', memo);
  }, []);

  const cartItems = [
    {
      itemId: 1,
      itemName: '高雄美麗島',
      itemChosen: '一日遊',
      chosenStartDate: '2021-01-31',
      chosenEndDate: '2021-01-31',
      amount: 2,
      price: 200,
      description: {
        participantTabs: [
          {
            participantId: 1,
            participantTitle: '王大明',
            content: {
              name: '王大明',
              phone: '0912345678',
              email: 'asd123@asda.com',
            },
          },
          {
            participantId: 2,
            participantTitle: '李小美',
            content: {
              name: '李小美',
              phone: '0987654321',
              email: 'qwe123@qewq.com',
            },
          },
        ],
      },
    },
    {
      itemId: 2,
      itemName: '宜蘭快樂遊1',
      itemChosen: '三日遊',
      chosenStartDate: '2021-01-31',
      chosenEndDate: '2021-02-02',
      amount: 2,
      price: 300,
      description: {
        participantTabs: [
          {
            participantId: 1,
            participantTitle: '王大明',
            content: {
              name: '王大明',
              phone: '0912345678',
              email: 'asd123@asda.com',
            },
          },
          {
            participantId: 2,
            participantTitle: '馬大美',
            content: {
              name: '馬大美',
              phone: '0987654321',
              email: 'qwe123@qewq.com',
            },
          },
        ],
      },
    },
  ];
  
  const [userCreditCard, setUserCreditCard] = useState({});
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  const creditCard = {
    number: number,
    name: name,
    expDate: expDate,
    cvc: cvc,
    focus: focus,
  };
  const updateValue = {
    setNumber: (value) => {
      setNumber(value);
    },
    setName: (value) => {
      setName(value);
    },
    setExpDate: (value) => {
      setExpDate(value);
    },
    setCvc: (value) => {
      setCvc(value);
    },
    setFocus: (value) => {
      setFocus(value);
    },
    // setMemo: (value) => {
    //   setMemo(value);
    // },
  };
  

  async function handleGetCard(e) {
    e.preventDefault();
    // !關閉表單預設行為
    console.log('=======jwtDecodedData.email========', jwtDecodedData.email);
    // * ajax
    try {
      let response = await axios.get(
        `http://localhost:3001/api/payment/CheckOut/Travel/creditCard/${jwtDecodedData.email}`,
        {
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
          },
        }
      );

      console.log('OPENAI好厲害比人還會說話', response.data[0]);
      setNumber(response.data[0].card_number);

      setName(response.data[0].cardholder_name);

      setExpDate(response.data[0].exp_date);

      setCvc(response.data[0].cvc);
    } catch (e) {
      alert('沒有信用卡資料');
    }
    console.log('setCard', userCreditCard.card_number);
    console.log('setCard', userCreditCard.cardholder_name);
    console.log('setCard', userCreditCard.exp_date);
    console.log('setCard', userCreditCard.cvc);
  }
  async function handleCheckOut(e) {
    e.preventDefault();
    // !關閉表單預設行為
    if (!number) {
      alert('請輸入卡號');
    } else if (!name) {
      alert('請輸入持卡人姓名');
    } else if (!expDate) {
      alert('請輸入有效日期');
    } else if (!cvc) {
      alert('請輸入安全碼');
    } 
    // else if (!isChecked) {
    //   alert('請勾選同意 隱私條款與優惠資訊');
    // } 
    else {
      // * ajax

      try {
        let response = await axios.post(
          `http://localhost:3000/api/payment/CheckOut/Hotel/order/CheckOut`,
          { orderId },
          {
            headers: {
              'Cache-Control': 'no-cache, no-store, must-revalidate',
            },
          }
        );
      } catch (e) {
        alert('付款失敗');
      }
      navigate(`/profile/listdetail/${orderId}`);
    }
  }
  return (
    <>
      <ProgressBar currentStep={currentStep} />

      <main className="container main-width px-0">
        {/* <!-- TODO 付款方式、小計TOTAL清單 --> */}
        <div className=" row w-100 px-0 mx-0 ">
          <div className="col-4 ps-0 my-3">
            {/* <PaymentMethod /> */}
            <UserData booker={booker}/>
          </div>
          <div className="col-8 pe-0 my-3">
            <CheckOutItemList cartItems={cartItems} />
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
              <CheckOutCreditCard  creditCard={creditCard}
                  userCreditCard={userCreditCard}
                  updateValue={updateValue} />
              <div className="notice w-100 py-3 text-right">
                <h5 className="d-flex justify-content-end">
                  本訂單無須CVC 安全碼
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- TODO 注意事項 --> */}
        {/* <!-- NOTE 同意條款 --> */}
        <div className="rule-section  col-12 pb-5">
          <div className="d-flex justify-content-center">
            <button className="my-btn w-25 ">確認付款</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default TravelPaymentCheckOut;
