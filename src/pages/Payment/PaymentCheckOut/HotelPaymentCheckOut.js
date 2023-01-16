import React, { useState } from 'react';
import './HotelPaymentCheckOut.scss';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import ProductImg from '../../Hotel/img/banner.svg';
import Modal from 'react-bootstrap/Modal';
import { ModalTitle } from 'react-bootstrap';

const HotelPaymentCheckOut = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <main className="container main-width px-0">
        {/* <!-- TODO 訂房商品資訊、飯店+房型+訂房個資--> */}
        <div className="row w-100 my-3  mx-0 px-0">
          {/* <!-- NOTE  訂房商品資訊--> */}
          <div className="col-4 p-0 mx-0">
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
                      <div className="change-chosen my-edit-btn w-25 d-flex align-items-center justify-content-center">
                        更改選擇
                      </div>
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
          <div className="col-8  p-0 h-100 mx-0">
            {/* <!-- NOTE 飯店名 --> */}
            <div className="hotel-room-profile ms-3 ">
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
              <div className="room-info   px-3 pb-5">
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
                {/* <!-- NOTE  個人資料--> */}
                <div className="profile-data align-items-stretch mx-3 my-2">
                  <h4 className="title mb-3">個人資料</h4>
                  <div className="profile-content px-3  row gy-3">
                    <div className="data-area col-4">
                      <h5 className="m-0">姓名</h5>
                      <span>王</span> <span> 阿明</span>
                    </div>
                    <div className="data-area col-4">
                      <h5 className="m-0">信箱</h5>
                      <span>sss@gmail.com</span>
                    </div>
                    <div className="data-area col-4">
                      <h5 className="m-0">連絡電話</h5>
                      <span>0975-123-456</span>
                    </div>
                    <div className="data-area col-4">
                      <h5 className="m-0">國家 / 地區</h5>
                      <span>台灣 / 台北</span>
                    </div>
                    <div className="data-area col-4">
                      <h5 className="m-0">語言</h5>
                      <span>中文</span>
                    </div>
                    <div className="data-area col-4">
                      <button
                        className="my-btn w-50"
                        data-bs-toggle="modal"
                        onClick={handleShow}
                      >
                        返回資料
                      </button>
                    </div>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header
                        closeButton
                        className="border-0 bg-warning bg-opacity-10  w-100"
                      >
                        <Modal.Title>個人資料</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="bg-warning bg-opacity-10">
                        <div className="profile-content px-3  row gy-3">
                          <div className="data-area d-flex col-4">
                            <div className="mx-1">
                              <h5 className="mx-0">姓氏</h5>
                              <input
                                type="text"
                                className="form-control border-0"
                              />
                            </div>
                            <div className="mx-1">
                              <h5 className="mx-0">名字</h5>
                              <input
                                type="text"
                                className="form-control border-0"
                              />
                            </div>
                          </div>
                          <div className="data-area col-4">
                            <h5 className="mx-0">信箱</h5>
                            <input
                              type="email"
                              className="form-control border-0"
                            />
                          </div>
                          <div className="data-area col-4">
                            <h5 className="mx-0">連絡電話</h5>
                            <input
                              type="tel"
                              className="form-control border-0"
                            />
                          </div>
                          <div className="data-area col-4">
                            <h5 className="mx-0">國家 / 地區</h5>
                            <input
                              type="text"
                              className="form-control border-0"
                            />
                          </div>
                          <div className="data-area col-4">
                            <h5 className="mx-0">語言</h5>
                            <input
                              type="text"
                              className="form-control border-0"
                            />
                          </div>
                          <div className="data-area col-4"></div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer className="bg-warning bg-opacity-10">
                        <button
                          className="my-btn"
                          variant="secondary"
                          onClick={handleClose}
                        >
                          取消
                        </button>
                        <button
                          className="my-btn"
                          variant="primary"
                          onClick={handleClose}
                        >
                          保存
                        </button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- TODO 付款方式、MEMO --> */}
        <div className="row w-100 mb-3 mx-0">
          {/* <!-- NOTE 選擇付款方式 --> */}
          <div className="col-4 p-0 ">
            <div className="payment-chosen-section d-flex  flex-column mb-3 px-4 py-4 ">
              <div className="contact-title  align-items-center mb-3 px-0 ">
                <h4 className="title">請選擇付款方式</h4>
                <small className="ms-2">
                  *確認訂單後，需於30分鐘內完成付款
                </small>
              </div>
              <div className="sub-detail  p-3 mb-3">
                <input type="radio" name="payment" id="" checked /> 信用卡
              </div>
              <div className="sub-detail  p-3 mb-3">
                <input type="radio" name="payment" id="" /> LINE Pay
              </div>
            </div>
          </div>
          <div className="col-8 p-0 d-flex">
            {/* <!-- NOTE MEMO+ARRIVE --> */}
            <div className="memo-form px-5 py-4 ms-3 h-100  d-flex justify-content-between">
              {/* <!-- NOTE MEMO 資訊--> */}
              <div className="memo-data w-100 p-0">
                <h4 className="title mb-3">您有什麼特別的需求？</h4>
                <p className="">
                  住宿方無法保證達成您的特殊要求－但將盡力為您安排。
                </p>
                <textarea
                  className="form-control border-0 "
                  name=""
                  id=""
                  cols="10"
                  rows="9"
                ></textarea>
              </div>
              {/* <!-- NOTE 抵達時間 資訊 --> */}
              <div className="arrive-data d-flex align-items-baseline ps-5">
                <div className=" arrive-time-data d-flex flex-column p-3">
                  <h5>預計抵達時間</h5>
                  12:00
                  <ul>
                    <small>
                      <li> 您的客房將會在 15:00 開放辦理入住</li>
                    </small>
                    <small>
                      <li>
                        24
                        小時接待櫃檯－在您有需要的時候，隨時都能為您提供服務！
                      </li>
                    </small>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- TODO 付款方式資料 --> */}
        <div className=" row w-100 mx-0">
          <div className="col-12 p-0">
            <div className="payment-detail d-flex flex-column mb-3 px-5 ">
              <div className="contact-title d-flex align-items-center justify-content-between my-3 px-0 pt-3">
                <h3 className="title">填寫付款資料</h3>
                <button className="my-btn d-flex align-items-center justify-content-around  ">
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
                      <label for="" className=" pe-3">
                        卡別
                      </label>
                    </div>
                    <div className="col-7 px-0 ">
                      <input type="text" className="form-control border-0  " />
                    </div>
                  </div>
                  <div className="card-name row py-2">
                    <div className=" d-flex col-3  justify-content-end align-items-end">
                      <label for="" className=" pe-3">
                        持卡人姓名
                      </label>
                    </div>
                    <div className="col-7 px-0">
                      <input type="text" className="form-control border-0  " />
                    </div>
                  </div>
                  <div className="card-number row py-2">
                    <div className=" d-flex col-3  justify-content-end align-items-end">
                      <label for="" className=" pe-3">
                        卡號
                      </label>
                    </div>
                    <div className="col-7 px-0">
                      <input type="text" className="form-control border-0  " />
                    </div>
                  </div>

                  <div className="date-cvc row py-2">
                    <div className=" d-flex col-3  justify-content-end align-items-end">
                      <label for="" className=" pe-3">
                        有效日期
                      </label>
                    </div>
                    <div className="col-2 px-0">
                      <input type="text" className="form-control border-0  " />
                    </div>
                    <div className=" d-flex col-3  justify-content-end align-items-end">
                      <label for="" className=" pe-3">
                        安全碼
                      </label>
                    </div>
                    <div className="col-2 px-0">
                      <input type="text" className="form-control border-0  " />
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
        {/* <!-- TODO 提醒 --> */}
        <div className="row w-100 mb-3 mx-0">
          {/* <!-- TODO 提醒--> */}
          <div className=" memo-form col-12 d-flex justify-content-center align-items-center px-5 py-4  mb-3">
            <h4 className="my-0">計畫有變？</h4>
            <ul className="my-0">
              <li className="">
                {' '}
                別擔心，在2022年12月19日之前您都可以隨需要更改日期，
                房客詳細資料，新增特別要求或者取消預定。
              </li>
            </ul>
          </div>
          {/* <!-- TODO 分析與情報通知 --> */}
          <div className="col-4 p-0">
            <div className=" memo-form  d-flex justify-content-center align-items-center px-5 py-4">
              <span>
                所選日期台北住宿數量有限：
                <br />1 間相似的五星級飯店於本站已無法預訂
              </span>
            </div>
          </div>
          <div className="col-8 p-0 ps-3">
            <div className="memo-form h-100">
              <div className="notice px-5 d-flex flex-column">
                <div className="poicy py-2 d-flex justify-content-end align-items-center">
                  <div className="checked   py-1 ">
                    <input type="checkbox" name="" id="" className=" mx-3" />
                  </div>
                  <span className="">
                    我想優先收到<span>來七桃</span>
                    的最新優惠訊息並希望定期收到電子報。查看
                    <a href="">隱私權條款</a>以了解更多相關資訊。
                  </span>
                </div>
                <div className="poicy-argee px-5 py-2">
                  <input type="checkbox" name="" id="" className="mx-3" />
                  是，我同意接收 來七桃行銷電子報，通知我來七桃優惠資訊。
                </div>
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
              確認付款
            </Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default HotelPaymentCheckOut;
