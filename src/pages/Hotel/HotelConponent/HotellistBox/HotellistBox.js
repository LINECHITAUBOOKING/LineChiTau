import React from 'react'
import './HotellistBox.scss'
import pic3 from '../../img/Hotel1/rocky-DBL.jpg';

const HotellistBox = () => {
    return (
        <>
            <div className="container-xl hotellist-box">
                <div className='d-flex justify-content-around'>
                    <p>關鍵字：共 123456 項 結果 </p>
                    <ul className='list-unstyled d-flex'>
                        <li>排序：</li>
                        <li>人氣 | </li>
                        <li>評價 | </li>
                        <li>價格 ▲ | </li>
                        <li>價格▼</li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-3 border">

                    </div>
                    <div className="col-9 border">
                        <div className='products-card d-flex'>
                            <div>
                                <img src={pic3} className="products-card-pic my-border-radius"></img>
                            </div>
                            <div className='mx-3 my-2'>
                                <h5 className='nav-foot'>娜路彎銀河酒店</h5>
                                <p className="my-p">娜路彎銀河酒店位於台東市，設有全年開放的室外泳池和 SPA 中心。此住宿附設免費私人停車位。 此住宿距離台東火車站 10 分鐘車程。此住宿距離鐵花村音樂聚落和台東鐵道藝術村。</p>
                                <ul className="list-unstyled d-flex">
                                    <li>
                                        <button className="search-tag my-border-radius my-p mx-1">
                                            泳池
                                        </button>
                                    </li>
                                    <li>
                                        <button className="search-tag my-border-radius my-p mx-1">
                                            泳池
                                        </button>
                                    </li>
                                    <li>
                                        <button className="search-tag my-border-radius my-p mx-1">
                                            泳池
                                        </button>
                                    </li>
                                    <li>
                                        <button className="search-tag my-border-radius my-p mx-1">
                                            泳池
                                        </button>
                                    </li>
                                    <li>
                                        <button className="search-tag my-border-radius my-p mx-1">
                                            泳池
                                        </button>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-between my-p">
                                    <div className="d-flex">
                                        <div class="material-symbols-outlined">
                                            location_on
                                        </div>
                                        <p>台東市</p>
                                    </div>
                                    <div className="d-flex">
                                        <div class="material-symbols-outlined">
                                            monetization_on
                                        </div>
                                        <p>1000 / 晚</p>
                                    </div>
                                    <div className="d-flex">
                                        <div class="material-symbols-outlined">
                                            bookmark
                                        </div>
                                        <p>收藏</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotellistBox