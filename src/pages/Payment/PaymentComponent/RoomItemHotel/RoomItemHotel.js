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

const RoomItemHotel = (props) => {
 
  
  return (
    <>
     <div className="hotel-name mb-4 ">
              <div className="room-info d-flex  align-items-center px-3 py-4">
                <div className=" col-3  mx-3">
                  <img
                    className="img-fluid item-image overflow-hidden"
                    src={ProductImg}
                    alt="行程票券商品圖"
                  />
                </div>
                <div className="item-context col-9 mx-3 align-self-start ">
                  <h4>{props.itemHotel.hotelName}</h4>
                  <p>{props.itemHotel.hotelAdd}</p>
                  <p className="d-flex align-items-center">
                    <span className="material-symbols-rounded text-warning">
                      star
                    </span>
                    {props.itemHotel.hotelStar} / 5
                  </p>
                </div>
              </div>
            </div>
    </>
  );
};

export default RoomItemHotel;
