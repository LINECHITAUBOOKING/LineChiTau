import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useOutletContext,
} from 'react-router-dom';
const CheckOutCreditCard = (props) => {
  return (
    <>
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
                        className="form-control border-0  "
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
                        className="form-control border-0  "
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
                        className="form-control border-0  "
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
                        className="form-control border-0  "
                      />
                    </div>
                    <div className=" d-flex col-3  justify-content-end align-items-end">
                      <label className=" pe-3">安全碼</label>
                    </div>
                    <div className="col-2 px-0">
                      <input
                        type="text"
                        className="form-control border-0  "
                      />
                    </div>
                  </div>
                </div>
              </div>
    </>
  );
};

export default CheckOutCreditCard;
