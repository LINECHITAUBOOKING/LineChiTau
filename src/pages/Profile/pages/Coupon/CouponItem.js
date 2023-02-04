import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.png';
import place from './images/place.png';
import coin from './images/coin.png';
import logo from './images/logo.png';
import clock from './images/clock.svg';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { JwtCsrfTokenContext } from '../../../../utils/csrf-hook/useJwtCsrfToken';

import NewsTicker, {
  Directions,
  TickerStates,
} from 'react-advanced-news-ticker';
import './Coupon.scss';
const CouponItem = () => {
  const { jwtToken, userF, logout } = useContext(JwtCsrfTokenContext);
  const [member, setMember] = useState({});
  const [coupon, setCoupon] = useState({});
  console.log('userF', userF.email);
  console.log(jwtToken);
  const navigate = useNavigate();
  // const location = useLocation();
  const couponitem = async () => {
    const res = await fetch(
      `http://localhost:3001/api/coupon/couponitem/${userF.email}`
    );
    const listdata = await res.json();
    // console.log(JSON.parse(response));
    console.log(listdata);
    setCoupon(listdata);

    return listdata;
  };
  const {
    data: listdata,
    isLoading,
    isError,
  } = useQuery('listdetail', couponitem, {
    cacheTime: 1000,
  });
  //   console.log(listdata);

  return (
    <>
      {coupon.map((item, index) => {
        return (
          <>
            <div className="coupon-item">
              <div className="item1">
                <img src={logo} alt="" />
                <div>棲桃購物</div>
              </div>
              <div className="item2">
                <h1>{}折</h1>
                <h6>低消$2000</h6>
                <h6 className="h6-2">1.11新春狂購月</h6>
                <div className="text-icon">
                  <img src={clock} alt="" />
                  <h6>2023.01.11起生效</h6>
                </div>
              </div>
              <div className="item3">
                <button className="my-btn">領取</button>
                <p>使用規則</p>
              </div>
            </div>
          </>
        );
      })}
      {/* <div className="coupon-item">
        <div className="item1">
          <img src={logo} alt="" />
          <div>棲桃購物</div>
        </div>
        <div className="item2">
          <h1>{}折</h1>
          <h6>低消$2000</h6>
          <h6 className="h6-2">1.11新春狂購月</h6>
          <div className="text-icon">
            <img src={clock} alt="" />
            <h6>2023.01.11起生效</h6>
          </div>
        </div>
        <div className="item3">
          <button className="my-btn">領取</button>
          <p>使用規則</p>
        </div>
      </div> */}
    </>
  );
};

export default CouponItem;
