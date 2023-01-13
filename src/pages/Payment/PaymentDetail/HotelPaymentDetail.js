import React from 'react';
import '../layout/payment.scss';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './HotelPaymentDetail.scss';
import ProductImg from '../../Hotel/img/banner.svg';
const HotelPaymentDetail = () => {
  return (
    <>
      <main className="container main-width px-0">
        {/* <!-- TODO 訂房商品資訊、飯店+房型+訂房規則--> */}
        <div className="row my-3 mx-0 justify-content-between">
          {/* <!-- NOTE  訂房商品資訊--> */}
          <div className="col-4 p-0">
            <div className="order-info px-4 py-3 h-100">
              <h4 className="title my-3">您的住房資訊</h4>
              <div className="check-time row mb-3 justify-content-between">
                <div className="col-6">
                  <div className="check-in-time order-info-detail align-items-center px-3 py-2 ">
                    <h6>入住時間</h6>
                    <div className="checkin-datetime d-flex flex-column">
                      <span>2022年12月20日</span>
                      <small>15:00起</small>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="check-out-time order-info-detail align-items-center  px-3 py-2">
                    <h6>退房時間</h6>
                    <div className="checkout-datetime d-flex flex-column">
                      <span>2022年12月21日</span>
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
                      <span>行政尊爵套房</span>
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
                      <span className="col-auto">1晚</span>
                    </div>
                    <div className="sub-price bg-transparent row ">
                      <span className="col-4">價格：</span>{' '}
                      <span className="col-auto">新台幣60,000</span>
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
          </div>
          {/* <!-- NOTE  飯店+房型+訂房規則--> */}
          <div className="col-8  pe-0">
            {/* <!-- NOTE 飯店名 --> */}
            <div className="hotel-name mb-4 ">
              <div className="room-info d-flex  align-items-center px-3 py-4">
                <div className=" col-3  mx-3">
                  <img
                    className="img-fluid item-image overflow-hidden"
                    src={ProductImg}
                    alt="行程票券商品圖"
                  />
                </div>
                <div className="item-context col-9 mx-3 align-self-start ">
                  <h4>台北文華東方酒店</h4>
                  <p>台北松山區敦化北路158號</p>
                  <p className="d-flex align-items-center">
                    <span className="material-symbols-rounded text-warning">
                      star
                    </span>
                    4.7 / 5
                  </p>
                </div>
              </div>
            </div>
            <div className="room-info   p-3">
              {/* <!-- NOTE 房型服務資訊 --> */}
              <div className="room-service  mx-3 pt-3">
                <div className="room-name d-flex align-items-center">
                  <h4 className="me-3">行政尊爵套房 </h4>
                  <small>*取消須付費</small>
                </div>
                <div className="service-list py-2 row mb-3">
                  <span className="tag col-auto ms-2">早餐</span>
                  <span className="tag col-auto ms-2">喚醒服務</span>
                  <span className="tag col-auto ms-2">迷你吧</span>
                  <span className="tag col-auto ms-2">洗/烘衣服務</span>
                </div>
              </div>
              {/* <!-- NOTE  訂房規則--> */}
              <div className="order-rule mx-3 py-2">
                <h5>訂前必讀</h5>
                <ul className="ps-5 row gy-2">
                  <li>現在免付任何費用，您將於入住時付款</li>
                  <li>2022年12月18日 下午11:59前，免費取消</li>
                  <li>2022年12月19日 上午12:00起，收取新台幣60,000</li>
                  <li>現在免付任何費用，您將於入住時付款</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- TODO 個人資料、MEMO --> */}
        <div className="row w-100 mx-0 mb-3">
          {/* <!-- NOTE 填寫個人資料 --> */}
          <div className=" col-6 p-0">
            <div className="profile-form px-5 py-4 me-3 h-100">
              <h4 className="title mb-3">請輸入個人資料</h4>
              <div className="user-data">
                <div className="name d-flex">
                  <div className="last-name ">
                    <label for="">姓氏</label>
                    <input type="text" className="form-control border-0" />
                  </div>
                  <div className="first-name px-3">
                    <label for="">名字</label>
                    <input type="text" className="form-control border-0" />
                  </div>
                </div>
                <div className="email">
                  <label for="">E-mail</label>
                  <input type="text" className="form-control border-0 pe-3" />
                </div>

                <div className="tel">
                  <label for="">連絡電話</label>
                  <input type="text" className="form-control border-0" />
                </div>

                <div className="country-lang d-flex">
                  <div className="country">
                    <label for="">國家 / 地區</label>
                    <input type="text" className="form-control border-0" />
                  </div>
                  <div className="lang px-3">
                    <label for="">語言</label>
                    <input type="text" className="form-control border-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- NOTE MEMO --> */}
          <div className="col-6 p-0">
            <div className="memo-form px-5 py-4 ms-3 h-100">
              <h4 className="title mb-3">您有什麼特別的需求？</h4>
              <p className="">
                住宿方無法保證達成您的特殊要求－但將盡力為您安排。
              </p>
              <textarea
                className="form-control border-0 "
                name=""
                id=""
                cols="5"
                rows="9"
              ></textarea>
            </div>
          </div>
        </div>
        {/* <!-- TODO 預計抵達時間 --> */}
        <div className="row w-100 mx-0 mb-3 ">
          <div className="arrive-time col-12 p-0">
            <div className="px-5 py-4">
              <h4 className="title mb-3">您的抵達時間</h4>
              <ul className="row gy-2 ps-5">
                <li>您的客房將會在 15:00 開放辦理入住</li>
                <li>
                  24 小時接待櫃檯－在您有需要的時候，隨時都能為您提供服務！
                </li>
              </ul>
              <div className="arrive-time-point ">
                <h5 className="py-3">請輸入您的抵達時間(可選填)</h5>
                <select className="form-control w-25 text-right">
                  <option value="1">1:00</option>
                  <option value="2">2:00</option>
                  <option value="3">3:00</option>
                  <option value="4">4:00</option>
                  <option value="5">5:00</option>
                  <option value="6">6:00</option>
                  <option value="12">12:00</option>
                  <option value="13">13:00</option>
                  <option value="14">14:00</option>
                  <option value="15">15:00</option>
                  <option value="16">16:00</option>
                  <option value="17">17:00</option>
                  <option value="18">18:00</option>
                  <option value="19">19:00</option>
                </select>
              </div>
            </div>
          </div>
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
