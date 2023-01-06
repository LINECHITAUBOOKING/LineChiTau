import React from 'react';
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.png';
import place from './images/place.png';
import coin from './images/coin.png';
import './List.scss';
const List = () => {
  return (
    <div className="container">
      <h1 className="buytitle valign-text-middle notosans-normal-old-copper-32px">
        訂購清單
      </h1>
      <div className="buylist">
        <div className="buylist-items">
          <div className="overlap-group-1">
            <img className="rectangle-1911" src={pic1} alt="Rectangle 1911" />
            <div className="text">
              <div className="notosans-normal-old-copper-20px">
                宜蘭龜山島賞鯨體驗
              </div>
              <div className="notosans-normal-sepia-16px">2022-12-31 15:00</div>
              <div className="notosans-normal-sepia-16px">
                實付金額：NT$ 7200
              </div>
            </div>
            <div className="button">
              <div className="button-1">
                <div className="notosans-normal-old-copper-16px">查看憑證</div>
              </div>
              <div className="button-1">
                <div className="notosans-normal-old-copper-16px">撰寫評價</div>
              </div>
            </div>
          </div>
          <div className="overlap-group-1">
            <img className="rectangle-1911" src={pic1} alt="Rectangle 1911" />
            <div className="text">
              <div className="notosans-normal-old-copper-20px">
                宜蘭龜山島賞鯨體驗
              </div>
              <div className="notosans-normal-sepia-16px">2022-12-31 15:00</div>
              <div className="notosans-normal-sepia-16px">
                實付金額：NT$ 7200
              </div>
            </div>
            <div className="button">
              <div className="button-1">
                <div className="notosans-normal-old-copper-16px">查看憑證</div>
              </div>
              <div className="button-1">
                <div className="notosans-normal-old-copper-16px">撰寫評價</div>
              </div>
            </div>
          </div>
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

export default List;
