import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useOutletContext,
} from 'react-router-dom';

import ProductImg from '../../../Hotel/img/banner.svg';

const RoomBooker = (props) => {
  

  return (
    <>
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
    </>
  );
};

export default RoomBooker;
