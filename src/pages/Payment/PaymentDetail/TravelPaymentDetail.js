import React from 'react';
import '../layout/payment.scss';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import ProductImg from '../../Hotel/img/banner.svg';

const TravelPaymentDetail = () => {
  return (
    <>
      <main className="container pe-0">
        <div className=" d-flex p-0">
          {/* <!-- TODO 項目(左區塊) --> */}
          <div className="item-list  col-8  gy-5 ">
            {/* <!-- NOTE 購買項目  --> */}
            <div className="item-section pb-0 row col-12  mt-3">
              <div className="contact-title d-flex align-items-center p-0">
                <h3 className="title">購買清單</h3>
              </div>
            </div>
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
              <div className=" d-flex flex-column align-items-start p-0 my-3">
                <h5 className="">參加人資料</h5>
              </div>
              <div className="item-chosen d-flex justify-content-start px-0 mb-3">
                <button className="my-btn contact-user-btn d-flex align-items-center me-1">
                  王阿明
                </button>
                <button className="my-edit-btn contact-user-btn d-flex align-items-center mx-1">
                  <span className="material-symbols-rounded me-2">
                    account_circle
                  </span>
                  新增
                </button>
              </div>
              <div className="item d-flex align-items-center p-3 ">
                <div className="item-user row col-12 position-relative">
                  <div className="user-content ">
                    <h5>
                      姓名: <small>王阿明</small>
                    </h5>
                    <h5>
                      電話: <small>+886 971717171</small>
                    </h5>
                    <h5>
                      信箱: <small>Ming717@taumail.com</small>
                    </h5>
                    <button className="my-edit-btn d-flex align-items-center position-absolute bottom-0 end-0">
                      <span className="material-symbols-rounded me-2">
                        account_circle
                      </span>
                      編輯
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
              <div className="item-chosen d-flex justify-content-between">
                <h5>預訂日期:2029/01/21</h5>
                <h5>數量:　1</h5>
              </div>
            </div>
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
              <div className=" item-chosen d-flex justify-content-between">
                <h5>預訂日期:2029/01/21</h5>
                <h5>數量:　1</h5>
              </div>
            </div>
            {/* <!-- NOTE 聯絡資料 --> */}
            <div className="item-section row col-12  my-3">
              <div className="contact-title d-flex align-items-center p-0">
                <h3 className="title">聯絡人資料</h3>
                <small className="ms-2">如果訂單有變動狀況將會通知您</small>
              </div>
              <div className="item-chosen d-flex justify-content-start px-0 my-3">
                <button className="my-btn contact-user-btn d-flex align-items-center me-1">
                  王阿明
                </button>
                <button className="my-edit-btn contact-user-btn d-flex align-items-center mx-1">
                  <span className="material-symbols-rounded me-2">
                    account_circle
                  </span>
                  新增
                </button>
              </div>
              <div className="item d-flex align-items-center p-3 ">
                <div className="item-user row col-12 position-relative">
                  <div className="user-content ">
                    <h5>
                      姓名: <small>王阿明</small>
                    </h5>
                    <h5>
                      電話: <small>+886 971717171</small>
                    </h5>
                    <h5>
                      信箱: <small>Ming717@taumail.com</small>
                    </h5>
                    <button className="my-edit-btn d-flex align-items-center position-absolute bottom-0 end-0">
                      <span className="material-symbols-rounded me-2">
                        account_circle
                      </span>
                      編輯
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- NOTE 折扣 --> */}
            <div className="item-section row col-12  my-3">
              <div className="contact-title d-flex align-items-center p-0">
                <h3 className="title">優惠折扣</h3>
              </div>
              <div className="item-chosen d-flex justify-content-start px-0 my-3">
                <input type="text" className="form-control  w-50" />
                <button className="my-btn use-coupon-btn d-flex align-items-center mx-1 col-3">
                  使用
                </button>
                <small className="mx-2  d-flex align-items-center text-success">
                  <span className="material-symbols-rounded">done</span>使用成功
                </small>
                <small className="mx-2 d-flex align-items-center text-danger">
                  <span className="material-symbols-rounded">close</span>
                  使用失敗
                </small>
              </div>
              {/* NOTE <!-- ! 可用優惠券 選後自動帶入上方輸入(?) --> */}
              <div className=" d-flex flex-column align-items-start p-0 ">
                <h5 className="">可選優惠券(2)</h5>
                <select name="" id="" className="form-select w-25">
                  <option value="">10%折扣</option>
                  <option value="">50%折扣</option>
                </select>
              </div>
            </div>
            {/* NOTE <!-- * 同意條款 --> */}
            <div className="rule-section  row col-12 pb-5">
              <div className="argee px-1 py-3 d-flex align-items-center">
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
            <div className="sub-section d-flex flex-column my-3 px-3 py-3">
              <div className="sub-detail p-3 mb-2">
                {/* <!-- NOTE ? 有要分票券張數跟行程計數嗎? --> */}
                <h5>總數：2張,1行程</h5>
                <h5>原價：2468 元</h5>
                <h5 className="text-danger">折扣：246</h5>
                <h5>實付：2222</h5>
              </div>
              <div className="topay text-center row m-0">
                <button className=" my-btn col-auto align-items-center me-1">
                  <Link
                    className="text-decoration-none d-flex align-items-center"
                    to={'/payment/ShoppingCart'}
                  >
                    返回<span className="material-symbols-rounded">undo</span>
                  </Link>
                </button>
                <button className=" my-btn col text-decoration-none">
                  <Link
                    className="text-decoration-none "
                    to={'/payment/TravelPaymentCheckOut'}
                  >
                    前往付款
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TravelPaymentDetail;
