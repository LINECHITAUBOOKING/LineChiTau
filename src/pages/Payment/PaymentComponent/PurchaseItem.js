import React from 'react';
import '../layout/ProgressBar.scss';
import ProductImg from '../../Hotel/img/banner.svg';
import Participant from './Participant/Participant';

const PurchaseItem = (props) => {
  return (
    <>
      <div className="item-section row col-12  mb-3">
        <div className="item d-flex  align-items-center p-3 my-3">
          <div className=" col-3 ">
            <img
              className="img-fluid item-image overflow-hidden"
              src={ProductImg}
              alt="行程票券商品圖"
            />
          </div>
          <div className="item-context col-9 mx-3 align-self-start ">
            <h5>行程/門票名</h5>
            <p>方案項目:九份一日遊</p>
          </div>
        </div>
        <div className="sub-price item-chosen d-flex justify-content-between px-3">
          <h5>預訂日期:2029/01/21</h5>
          <h5>數量:　1</h5>
        </div>
        <Participant />
      </div>
    </>
  );
};

export default PurchaseItem;
