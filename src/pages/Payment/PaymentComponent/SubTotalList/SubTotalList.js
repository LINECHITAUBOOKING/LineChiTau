import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useOutletContext,
} from 'react-router-dom';
const SubTotalList = (props) => {
  return (
    <>
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
    </>
  );
};

export default SubTotalList;
