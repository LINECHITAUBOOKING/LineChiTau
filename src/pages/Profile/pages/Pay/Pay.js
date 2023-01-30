import React from 'react';
import './Pay.scss';
import Card1 from './images/Card1.png';
import Card2 from './images/Card2.png';
import Card3 from './images/Card3.png';
import Card4 from './images/Card4.png';
import Card5 from './images/Card5.png';
import Card6 from './images/Card6.png';
import Card7 from './images/Card7.png';

const Pay = () => {
  return (
    <div className="container">
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
      <div className="manger-profile my-border-radius">
        <div className="new-card">
          <div className="new-pay-card">
            <img className="pic" src={Card7} alt="" />
            <div className="pay-text">
              <span className="material-symbols-outlined">barcode_scanner</span>
              <div>Scan your card</div>
            </div>
          </div>
          <div className="pay-text-manger">
            <div className="pay-text-detail">
              Cardholder name
              <input type="text" />
            </div>
            <div className="pay-text-detail">
              Card number
              <input type="text" />
            </div>
            <div className="pay-text-detail-date">
              <div className="pay-text-detail">
                Exp date
                <input type="text" />
              </div>
              <div className="pay-text-detail ms-2">
                CVC
                <input type="text" />
              </div>
            </div>
            <div className="pay-text-detail-checkbox">
              <input type="checkbox" />
              <div className="ms-2">Save your information card</div>
            </div>
            <button className="p-2">Add Cards</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
