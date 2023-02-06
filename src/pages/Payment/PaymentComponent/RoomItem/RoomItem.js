import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useOutletContext,
} from 'react-router-dom';

const RoomItem = (props) => {
  const totalDate = 12 - 11;
  return (
    <>
      <div className="order-info px-4 py-3 h-100">
        <h4 className="title my-3">您的住房資訊</h4>
        <div className="check-time row mb-3 justify-content-between">
          <div className="col-6">
            <div className="check-in-time order-info-detail align-items-center px-3 py-2 ">
              <h6>入住時間</h6>
              <div className="checkin-datetime d-flex flex-column">
                <span>{props.roomItem.startDate}</span>
                <small>15:00起</small>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="check-out-time order-info-detail align-items-center  px-3 py-2">
              <h6>退房時間</h6>
              <div className="checkout-datetime d-flex flex-column">
                <span>{props.roomItem.endDate}</span>
                <small>12:00前</small>
              </div>
            </div>
          </div>
        </div>
        <div className=" row justify-content-around  mb-3">
          <div className="col-12">
            <div className="room-chosen order-info-detail   px-3  py-2">
              <h5>已選擇：</h5>
              <div className="chosen-room d-flex justify-content-around align-items-center">
                <span>{props.roomItem.roomName}</span>
                <span>{props.roomItem.amount}間</span>
                {/* NOTE 回到商品頁/上一頁 */}
                <Link
                  className="text-decoration-none d-flex align-items-center"
                  to={'/'}
                >
                  <button className="change-chosen my-edit-btn d-flex align-items-center justify-content-center">
                    更改選擇
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <div className="sub order-info-detail py-3  ">
              <div className="sub-days sub-price bg-transparent row">
                <span className="col-4"> 總共入住：</span>{' '}
                {/* NOTE 退房-入住 */}
                <span className="col-auto">{totalDate}晚</span>
              </div>
              <div className="sub-price bg-transparent row ">
                <span className="col-4">價格：</span>{' '}
                <span className="col-auto">
                  新台幣{props.roomItem.price * props.roomItem.amount}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="not-in-price col-12 px-4">
            <span>未包含費用</span>
            <div className="tax row ">
              <small className="col-4 mx-2">加值税 </small>
              <small className="col-auto"> 新台幣3,000</small>
            </div>
            <div className="tip row ">
              <small className="col-4 mx-2">住宿方服務費 </small>
              <small className="col-auto"> 新台幣6,000</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomItem;
