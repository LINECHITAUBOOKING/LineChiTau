import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import pic3 from '../../img/Hotel1/rocky-DBL.jpg';
import './RoomSelect.scss';

const RoomSelect = () => {
  return (
    <>
      <div className="container-xxl room-select-box">
        <h4 className="my-heading">選擇房型</h4>
        <SearchBar />
        <div>
          <div>
            <ul className="list-unstyled d-flex justify-content-around">
              <li className="room-type-card">
                <div className="room-pic-box">
                  <img src={pic3} className="room-pic" alt="room-pic" />
                </div>
                <div className="p-3">
                  <h5>Wonderful Room</h5>
                  <p>客房, 1 張特大雙人床,非吸煙房, 城市景觀</p>
                  <ul>
                    <li>山景</li>
                    <li>最多可入住 3 人(含額外成人與孩童)</li>
                    <li>1 張特大雙人床</li>
                    <li>免費無線上網</li>
                    <li>免費自助停車</li>
                    <li>可選擇入住時付款</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomSelect;
