import React from 'react';
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.png';
import place from './images/place.png';
import coin from './images/coin.png';
import './List.scss';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import TList from './TList';

const List = () => {
  return (
    <div className="container-list">
      <h1 className="buytitle valign-text-middle notosans-normal-old-copper-32px">
        最新清單
      </h1>
      <div className="buylist">
        <div className="buylist-items">
          <TList />
        </div>
      </div>
      <Link
        color="black"
        to="/profile/alllist"
        className="my-btn seeall"
        onClick={() => {
          console.log('click');
        }}
      >
        查看全部
      </Link>

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
