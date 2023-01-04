import React from 'react'
import './HotelBanner.scss';

export const HotelBanner = () => {
    return (
        <div className="banner position-relative">
            <div className="search-bar position-absolute top-50 start-0 p-4 d-flex ">
                <div className='h6'><span class="material-symbols-outlined">
                    location_on
                </span>目的地
                    <input></input>
                </div>
                <div className='h6'><span class="material-symbols-outlined">
                    calendar_month
                </span>入住/退房日期
                    <input></input>
                </div>
                <div className='h6'><span class="material-symbols-outlined">
                    group
                </span>人數/間數
                    <input></input>
                </div>
                <button className="my-btn h6 p-4"><span class="material-symbols-outlined">
                    search
                </span></button>
            </div>
        </div>
    )
}

export default HotelBanner;