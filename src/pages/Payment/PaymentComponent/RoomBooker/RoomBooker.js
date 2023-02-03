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
          <div className="name row">
            <div className="last-name col-6">
              <label htmlFor="">姓氏</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="form-control border-0"
              />
            </div>
            <div className="first-name col-6">
              <label htmlFor="">名字</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="form-control border-0"
              />
            </div>
          </div>
          <div className="email">
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control border-0"
            />
          </div>

          <div className="tel">
            <label htmlFor="">連絡電話</label>
            <input
              type="text"
              id="tel"
              name="tel"
              className="form-control border-0"
            />
          </div>

          <div className="country-lang row">
            <div className="country col-6">
              <label htmlFor="">國家 / 地區</label>
              <input
                type="text"
                id="country"
                name="country"
                className="form-control border-0"
              />
            </div>
            <div className="lang col-6">
              <label htmlFor="lang">語言</label>
              <input
                type="text"
                id="lang"
                name="lang"
                className="form-control border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomBooker;
