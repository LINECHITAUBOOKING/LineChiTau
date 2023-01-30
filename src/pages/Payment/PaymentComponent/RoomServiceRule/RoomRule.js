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

const RoomRule = (props) => {
  const rule = props.roomServiceRule.rule;

  return (
    <>
      
      {/* <!-- NOTE  訂房規則--> */}
      <div className="order-rule mx-3 py-2">
        <h5>訂前必讀</h5>
        <ul className="ps-5 row gy-2">{rule.map((rule,index)=>(<li>{rule}</li>))}</ul>
      </div>
    </>
  );
};

export default RoomRule;
