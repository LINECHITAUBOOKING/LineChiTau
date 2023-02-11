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

        <div className="topay  row m-0">
        
          <span className="my-p-small mb-2">點擊「前往付款」，訂單即送出，請確認後再送出</span>
          <button className=" my-btn col align-items-center  me-1">
            <Link
              className="text-decoration-none d-flex align-items-center justify-content-center"
              to={'/ShoppingCart'}
            >
              返回購物車
              <span className="material-symbols-rounded">shopping_cart</span>
            </Link>
          </button>
          <button className=" my-btn col text-decoration-none ms-1">
            <Link
              className="text-decoration-none "
              to={'/payment/Travel/CheckOut'}
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
