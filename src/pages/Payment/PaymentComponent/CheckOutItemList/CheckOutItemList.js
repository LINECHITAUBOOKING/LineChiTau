import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useOutletContext,
} from 'react-router-dom';
const CheckItemList = () => {
  return (
    <>
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
     
    </>
  );
};
export default CheckItemList;
