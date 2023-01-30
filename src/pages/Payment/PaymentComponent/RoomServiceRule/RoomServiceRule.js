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

const RoomServiceRule = (props) => {
  console.log('asa', props);
  const rule = props.roomServiceRule.rule;
  const service = props.roomServiceRule.service;
  console.log('aaasdsada', rule);

  return (
    <>
      {/* <!-- NOTE 房型服務資訊 --> */}
      <div className="room-service  mx-3 pt-3">
        <div className="room-name d-flex align-items-center">
          <h4 className="me-3">行政尊爵套房 </h4>
          <small>*取消須付費</small>
        </div>
        <div className="service-list py-2 row mb-3">{service}</div>
      </div>
      {/* <!-- NOTE  訂房規則--> */}
      <div className="order-rule mx-3 py-2">
        <h5>訂前必讀</h5>
        <ul className="ps-5 row gy-2">{rule}</ul>
      </div>
    </>
  );
};

export default RoomServiceRule;
