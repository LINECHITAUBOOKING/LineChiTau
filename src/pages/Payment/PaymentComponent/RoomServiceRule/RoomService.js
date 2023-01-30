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

const RoomService = (props) => {
  
  const service = props.roomServiceRule.service;
  
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
      
    </>
  );
};

export default RoomService;
