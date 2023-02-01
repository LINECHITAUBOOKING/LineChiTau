import React from 'react';
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.png';
import place from './images/place.png';
import coin from './images/coin.png';
import logo from './images/logo.png';
import clock from './images/clock.svg';
import NewsTicker, {
  Directions,
  TickerStates,
} from 'react-advanced-news-ticker';
import './Coupon.scss';
const Coupon = () => {
  return (
    <div className="container-coupon">
      <h1 className="buytitle valign-text-middle notosans-normal-old-copper-32px">
        優惠券
      </h1>
      <div className="coupon">
        <div className="coupon-list">
          <NewsTicker
            className="coupon-li"
            rowHeight={204}
            maxRows={3}
            speed={600}
            direction={Directions.UP}
            duration={4000}
            autoStart={true}
            pauseOnHover={false}
            id="myId"
            style={{ marginTop: 34 }}
          >
            <div className="coupon-item">
              <div className="item1">
                <img src={logo} alt="" />
                <div>棲桃購物</div>
              </div>
              <div className="item2">
                <h1>8.5折</h1>
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
            <div className="coupon-item">
              <div className="item1">
                <img src={logo} alt="" />
                <div>棲桃購物</div>
              </div>
              <div className="item2">
                <h1>8.5折</h1>
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
          </NewsTicker>

          {/* <div className="coupon-item">
            <div className="item1">
              <img src={logo} alt="" />
              <div>棲桃購物</div>
            </div>
            <div className="item2">
              <h1>8.5折</h1>
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
        </div>
      </div>

      <div className="prefertitle valign-text-middle notosans-normal-old-copper-32px">
        推薦商品
      </div>
      <div className="preferlist">
        <div className="overlap-group-3">
          <img className="rectangle-82" src={pic2} alt="Rectangle 82" />
          <div className="surname-1">Snow Hills</div>
          <p className="great-skiing-opportu-1 notosans-bold-old-copper-14px">
            Great skiing opportunity with a beautiful view
          </p>
          <div className="group-98-1">
            <img className="place" src={place} alt="place" />
            <div className="carpati-ukraine-1 notosans-bold-old-copper-14px">
              Carpati., Ukraine
            </div>
            <div className="group-96">
              <img className="coin-1" src={coin} alt="coin" />
              <div className="number-1">75/ person</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-3">
          <img className="rectangle-82" src={pic2} alt="Rectangle 82" />
          <div className="surname-1">Snow Hills</div>
          <p className="great-skiing-opportu-1 notosans-bold-old-copper-14px">
            Great skiing opportunity with a beautiful view
          </p>
          <div className="group-98-1">
            <img className="place" src={place} alt="place" />
            <div className="carpati-ukraine-1 notosans-bold-old-copper-14px">
              Carpati., Ukraine
            </div>
            <div className="group-96">
              <img className="coin-1" src={coin} alt="coin" />
              <div className="number-1">75/ person</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-3">
          <img className="rectangle-82" src={pic2} alt="Rectangle 82" />
          <div className="surname-1">Snow Hills</div>
          <p className="great-skiing-opportu-1 notosans-bold-old-copper-14px">
            Great skiing opportunity with a beautiful view
          </p>
          <div className="group-98-1">
            <img className="place" src={place} alt="place" />
            <div className="carpati-ukraine-1 notosans-bold-old-copper-14px">
              Carpati., Ukraine
            </div>
            <div className="group-96">
              <img className="coin-1" src={coin} alt="coin" />
              <div className="number-1">75/ person</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
