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

const RoomMemo = (props) => {
  

  return (
    <>
      <div className="memo-form px-5 py-4 ms-3 h-100 col">
              <h4 className="title mb-3">您有什麼特別的需求？</h4>
              <p className="">
                住宿方無法保證達成您的特殊要求－但將盡力為您安排。
              </p>
              <textarea
                className="form-control border-0 "
                name=""
                id=""
                cols="5"
                rows="9"
              ></textarea>
            </div>
    </>
  );
};

export default RoomMemo;
