import React from 'react';
import './TravelPaymentCheckOut.scss';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import ProductImg from '../../Hotel/img/banner.svg';

const TravelPaymentCheckOut = () => {
  return (
    <>
      <main className="container main-width px-0">
        {/* <!-- TODO 付款方式、小計TOTAL清單 --> */}
        <div className=" row w-100 px-0 mx-0 ">
          <div className="col-4 ps-0 my-3">
            <div className="payment-chosen-section d-flex  flex-column mb-3 px-5 py-3 ">
              <div className="contact-title align-items-center mb-3 px-0 ">
                <h4 className="title">請選擇付款方式</h4>
                <small className="ms-2">
                  *確認訂單後，需於30分鐘內完成付款
                </small>
              </div>
              <div className="sub-detail  p-3 mb-3">
                <input type="radio" name="payment" id="" /> 信用卡
              </div>
              <div className="sub-detail  p-3 mb-3">
                <input type="radio" name="payment" id="" /> LINE Pay
              </div>
            </div>
          </div>
          <div className="col-8 pe-0 my-3">
            <div className="sub-section h-100 row justify-content-center justify-content-between  mb-3 px-3  mx-0">
              <div className="items-tabs d-flex flex-column row col-4 py-3 mx-0">
                <div className="sub-detail py-2 mb-2">行程1</div>
                <div className="sub-detail py-2 mb-2">行程1</div>
                <div className="sub-detail py-2 mb-2">行程1</div>
              </div>
              <div className="items col-8 py-3 mx-0">
                <div className="sub-detail p-3 mb-2">
                  <h5>行程/門票名</h5>
                  <p>方案項目:九份一日遊</p>
                  <h5>日期:2029/01/21</h5>
                  <h5>數量: x1</h5>
                  <div className="sub-price d-flex justify-content-between  ">
                    小計 :<span>1234 元</span>
                  </div>
                </div>
              </div>
              <div className="sub-total sub-price d-flex justify-content-between mb-3 align-items-center px-3">
                {' '}
                總計： <span>3702元</span>
              </div>
            </div>
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
              <div className="credit-card-section row  py-5">
                <div className="credit-card col-6 px-4 my-5 d-flex justify-content-center ">
                  <div className="card w-75 h-100  "></div>
                  <div className="btn my-btn w-auto d-flex justify-content-center align-items-center px-3 mx-3">
                    <span className="material-symbols-rounded">redo</span>
                  </div>
                </div>
                <div className="crad-info col-6 px-5  my-5">
                  <div className="crad-type row py-2">
                    <div className=" d-flex col-3  justify-content-end align-items-end">
                      <label className=" pe-3">卡別</label>
                    </div>
                    <div className="col-7 px-0 ">
                      <input
                        type="text"
                        className="form-control border-0 rounded-0 border-bottom bg-transparent "
                      />
                    </div>
                  </div>
                  <div className="card-name row py-2">
                    <div className=" d-flex col-3  justify-content-end align-items-end">
                      <label className=" pe-3">持卡人姓名</label>
                    </div>
                    <div className="col-7 px-0">
                      <input
                        type="text"
                        className="form-control border-0 rounded-0 border-bottom bg-transparent "
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
                        className="form-control border-0 rounded-0 border-bottom bg-transparent "
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
                        className="form-control border-0 rounded-0 border-bottom bg-transparent "
                      />
                    </div>
                    <div className=" d-flex col-3  justify-content-end align-items-end">
                      <label className=" pe-3">安全碼</label>
                    </div>
                    <div className="col-2 px-0">
                      <input
                        type="text"
                        className="form-control border-0 rounded-0 border-bottom bg-transparent "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="notice w-100 py-3 text-right">
                <h5 className="d-flex justify-content-end">
                  本訂單無須CVC 安全碼
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- TODO 折扣 --> */}
        <div className="item-section row w-100 mx-0 my-3">
          <div className="contact-title  align-items-center px-0">
            <h3 className="title">優惠折扣</h3>
          </div>
          <div className="item-chosen d-flex justify-content-start px-0 my-3">
            <input type="text" className="form-control  w-25" />
            <button className="my-btn use-coupon-btn d-flex align-items-center mx-1 col-3/">
              使用
            </button>
            <small className="mx-2  d-flex align-items-center text-success">
              <span className="material-symbols-rounded">done</span>使用成功
            </small>
            <small className="mx-2 d-flex align-items-center text-danger">
              <span className="material-symbols-rounded">close</span>使用失敗
            </small>
          </div>
          {/* <!-- NOTE ! 可用優惠券 選後自動帶入上方輸入(?) --> */}
          <div className=" d-flex flex-column align-items-start p-0 ">
            <h5 className="">可選優惠券(2)</h5>
            <select name="" id="" className="form-select w-25">
              <option value="">10%折扣</option>
              <option value="">50%折扣</option>
            </select>
          </div>
        </div>
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
