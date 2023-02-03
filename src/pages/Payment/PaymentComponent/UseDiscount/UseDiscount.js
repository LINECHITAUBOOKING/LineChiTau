import React from 'react';

const UseDiscount = (props) => {
  return (
    <>
      <div className="item-section row col-12  my-3 p-5">
        <div className="contact-title d-flex align-items-center py-0 px-3">
          <h3 className="title">優惠折扣</h3>
        </div>

        {/* NOTE <!-- ! 可用優惠券 選後自動帶入上方輸入(?) --> */}
        <div className=" d-flex flex-column align-items-start py-0 px-3 my-3 ">
          <h5 className="">可選優惠券(2)</h5>
          <select name="" id="" className="form-select ">
            <option value="">10%折扣</option>
            <option value="">50%折扣</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default UseDiscount;
