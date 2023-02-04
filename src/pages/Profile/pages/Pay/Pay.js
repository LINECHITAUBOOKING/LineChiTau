import React, { useState, useContext } from 'react';
import './Pay.scss';
import Card1 from './images/Card1.png';
import Card2 from './images/Card2.png';
import Card3 from './images/Card3.png';
import Card4 from './images/Card4.png';
import Card5 from './images/Card5.png';
import Card6 from './images/Card6.png';
import Card7 from './images/Card7.png';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import axios from 'axios';
import { JwtCsrfTokenContext } from '../../../../utils/csrf-hook/useJwtCsrfToken';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Pay = () => {
  const { jwtToken, userF, logout } = useContext(JwtCsrfTokenContext);
  const [number, SetNumber] = useState('');
  const [name, SetName] = useState('');
  const [date, SetDate] = useState('');
  const [cvc, SetCvc] = useState('');
  const [focus, SetFocus] = useState('');
  console.log(userF.email);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!!name === false) {
      alert('請輸入持卡人姓名');
      return;
    }
    if (!!number === false) {
      alert('請輸入卡號');
      return;
    }
    if (!!date === false) {
      alert('請輸入正確日期格式');
      return;
    }
    if (!!cvc === false) {
      alert('請輸入正確驗證碼格式');
      return;
    }
    if (number.length !== 16) {
      alert('卡號錯誤');
      return;
    }
    if (date.length !== 4) {
      alert('日期錯誤');
      return;
    }
    if (cvc.length !== 3) {
      alert('驗證碼錯誤');
      return;
    }
    let formData = {
      name: name,
      number: number,
      date: date,
      cvc: cvc,
      email: userF.email,
    };
    try {
      let response = await axios.post('/auth/pay', formData);
      console.log('成功');
      alert('新增成功');
    } catch (e) {
      alert('已經註冊過囉');
    }
  }

  return (
    <div className="container-pay">
      <h1 className="buytitle valign-text-middle notosans-normal-old-copper-32px">
        管理付款資料
      </h1>
      <div className="manger-profile my-border-radius">
        <div className="pay-text">以下為已綁定的卡片</div>
        <div className="pay-card">
          <img className="pic" src={Card1} alt="" />
          <img className="pic" src={Card2} alt="" />
          <img className="pic" src={Card3} alt="" />
        </div>
        <div className="pay-card">
          <img className="pic" src={Card4} alt="" />
          <img className="pic" src={Card5} alt="" />
          <img className="pic" src={Card6} alt="" />
        </div>
      </div>
      <h1 className="buytitle valign-text-middle notosans-normal-old-copper-32px">
        新增卡片
      </h1>
      <div
        id="PaymentForm"
        className="manger-profile my-border-radius d-flex align-items-center"
      >
        <div className="cards d-flex ms-5">
          <Cards
            number={number}
            name={name}
            expiry={date}
            cvc={cvc}
            focused={focus}
          />
          <form>
            <div className="card-name row py-2">
              <div className=" d-flex col-3  justify-content-end align-items-end">
                <label className=" pe-3">持卡人姓名</label>
              </div>
              <div className="col-7 px-0">
                <input
                  type="text"
                  className="form-control border-0"
                  value={name}
                  name="name"
                  onChange={(e) => {
                    SetName(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                />
              </div>
            </div>
            <div className="card-number row py-2">
              <div className=" d-flex col-3  justify-content-end align-items-end">
                <label className=" pe-3">卡號</label>
              </div>
              <div className="col-7 px-0">
                <input
                  type="text"
                  className="form-control border-0"
                  value={number}
                  maxLength="16"
                  name="number"
                  onChange={(e) => {
                    SetNumber(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                />
              </div>
            </div>
            <div className="date-cvc row py-2">
              <div className=" d-flex col-3  justify-content-end align-items-end">
                <label className=" pe-3">有效日期</label>
              </div>
              <div className="col-2 px-0">
                <input
                  type="text"
                  name="expiry"
                  className="form-control border-0"
                  value={date}
                  maxLength="4"
                  onChange={(e) => {
                    SetDate(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                />
              </div>
              <div className=" d-flex col-3  justify-content-end align-items-end">
                <label className=" pe-3">安全碼</label>
              </div>
              <div className="col-2 px-0">
                <input
                  type="tel"
                  name="cvc"
                  className=" border-0 form-control"
                  value={cvc}
                  maxLength="3"
                  onChange={(e) => {
                    SetCvc(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                />
              </div>
            </div>
            <button className="button-submit" onClick={handleSubmit}>
              送出
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pay;
