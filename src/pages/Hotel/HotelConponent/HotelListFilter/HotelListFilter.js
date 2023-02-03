import React from 'react';
import HotelTypeSort from '../HotelTypeSort/HotelTypeSort';
import HotelServiceSort from '../HotelServiceSort/HotelServiceSort';
import MoneySort from '../MoneySort/MoneySort';
import './HotelListFilter.scss';

function HotelListFilter({ hotelType, setFilterCondition }) {
  const hotelServiceListArray = [
    'WIFI',
    '泳池',
    '健身房',
    '餐廳',
    'BAR',
    '停車場',
    '洗衣間',
    '會議室',
    '娛樂間',
    '電梯',
    '行李寄放',
    '櫃台服務',
  ];
  const roomServiceListArray = [
    '寵物友善房',
    '液晶電視',
    '提供餐點',
    '迷你吧',
    '窗戶房',
    '邊間',
    '高樓層',
    '獨立浴室',
    '浴缸房',
    '淋浴間',
    '沙發',
    '吹風機',
    '冷氣機',
    '暖氣機',
    '晨喚服務',
    '免費拖鞋',
    '睡袍',
    '空氣清淨機',
  ];
  const roomPriceArray = [
    { from: 0, to: 2000 },
    { from: 2000, to: 4000 },
    { from: 4000, to: 6000 },
    { from: 6000, to: 8000 },
    { from: 8000, to: 10000 },
    { from: 10000, to: Number.MAX_SAFE_INTEGER },
  ];
  return (
    <>
      <div className="hotel-list-map m-auto position-relative">
        <button className="position-absolute my-p">檢視地圖</button>
      </div>
      <div className="filter-box">
        <div className="my-border-radius location-type-box m-auto mt-3">
          <div className="px-5 py-3 form-check">
            <h5 className="filter-box-title nav-foot">類型</h5>
            <HotelTypeSort
              hotelType={hotelType}
              setFilterCondition={setFilterCondition}
            />
          </div>
        </div>
        <div className="my-border-radius location-type-box m-auto mt-3">
          <div className="px-5 py-3 form-check">
            <h5 className="filter-box-title nav-foot">價格</h5>
            <MoneySort roomPriceArray={roomPriceArray} />
          </div>
        </div>
        <div className="my-border-radius location-type-box m-auto mt-3">
          <div className="px-5 py-3 form-check">
            <h5 className="filter-box-title nav-foot">飯店服務</h5>
            <div className="my-3">
              <HotelServiceSort hotelServiceListArray={hotelServiceListArray} />
            </div>
          </div>
        </div>
        <div className="my-border-radius location-type-box m-auto mt-3">
          <div className="px-5 py-3 form-check">
            <h5 className="filter-box-title nav-foot">房間設施</h5>
            <div className="my-3">
              <HotelServiceSort hotelServiceListArray={roomServiceListArray} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelListFilter;
