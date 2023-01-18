import React from 'react';

const UseDiscount = (props) => {
  return (
    <>
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
    </>
  );
};

export default UseDiscount;
