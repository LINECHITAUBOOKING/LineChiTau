import React from 'react';
import './HotelIntro.scss';

const HotelIntro = () => {
  return (
    <>
      <div className="container-xxl HotelIntro">
        <div className="row mt-4">
          <div className="col-8 left-side ">
            <nav>
              <ul className="list-unstyled d-flex justify-content-around p-2">
                <li>客房</li>
                <li>交通位置</li>
                <li>評論區</li>
                <li>注意事項</li>
              </ul>
            </nav>
            <h3 className="my-topic">娜路彎銀河酒店</h3>
            <div>
              <span class="material-symbols-outlined hotel-star-fill">
                star
              </span>
              <span class="material-symbols-outlined hotel-star-fill">
                star
              </span>
              <span class="material-symbols-outlined hotel-star-fill">
                star
              </span>
              <span class="material-symbols-outlined hotel-star">star</span>
              <span class="material-symbols-outlined hotel-star">star</span>
            </div>
            <div className="my-3">
              <h4 className="my-4 my-heading">飯店設施服務</h4>
              <div className="d-flex">
                <ul className="list-unstyled service-box">
                  <li className="my-p d-flex my-2">
                    <div class="material-symbols-outlined me-4">wifi</div>
                    <p>WIFI</p>
                  </li>
                  <li className="my-p d-flex my-2">
                    <div class="material-symbols-outlined me-4">pool</div>
                    <p>泳池</p>
                  </li>
                  <li className="my-p d-flex my-2">
                    <div class="material-symbols-outlined me-4">
                      fitness_center
                    </div>
                    <p>健身房</p>
                  </li>
                  <li className="my-p d-flex my-2">
                    <div class="material-symbols-outlined me-4">restaurant</div>
                    <p>餐廳</p>
                  </li>
                </ul>
                <ul className="list-unstyled service-box">
                  <li className="my-p d-flex my-2">
                    <div class="material-symbols-outlined me-4">local_bar</div>
                    <p>BAR</p>
                  </li>
                  <li className="my-p d-flex my-2">
                    <div class="material-symbols-outlined me-4">
                      local_parking
                    </div>
                    <p>停車場</p>
                  </li>
                  <li className="my-p d-flex my-2">
                    <div class="material-symbols-outlined me-4">
                      local_laundry_service
                    </div>
                    <p>洗衣間</p>
                  </li>
                  <li className="my-p d-flex my-2">
                    <div class="material-symbols-outlined me-4">
                      meeting_room
                    </div>
                    <p>會議室</p>
                  </li>
                </ul>
                <ul className="list-unstyled service-box">
                  <li className="my-p d-flex my-2">
                    <div class="material-symbols-outlined me-4">
                      sports_esports
                    </div>
                    <p>娛樂間</p>
                  </li>
                  <li className="my-p d-flex my-2">
                    <div class="material-symbols-outlined me-4">wifi</div>
                    <p>WIFI</p>
                  </li>
                  <li className="my-p d-flex my-2">
                    <div class="material-symbols-outlined me-4">wifi</div>
                    <p>WIFI</p>
                  </li>
                  <li className="my-p d-flex my-2">
                    <div class="material-symbols-outlined me-4">wifi</div>
                    <p>WIFI</p>
                  </li>
                </ul>
              </div>
              <div className="d-flex my-p">
                <p className="me-3">展開全部</p>
                <div class="material-symbols-outlined">play_arrow</div>
              </div>
            </div>
          </div>
          <div className="col-4 right-side">
            <div className="map m-auto position-relative">
              <button className="position-absolute my-p">檢視地圖</button>
            </div>
            <div className="mt-3">
              <h4>周邊景點</h4>
              <ul className="list-unstyled spot-box mt-3">
                <li className="my-p d-flex my-2">
                  <div class="material-symbols-outlined me-4">location_on</div>
                  <p className="me-4">故宮博物院 : </p>
                  <p>3公里</p>
                </li>
                <li className="my-p d-flex my-2">
                  <div class="material-symbols-outlined me-4">location_on</div>
                  <p className="me-4">故宮博物院 : </p>
                  <p>3公里</p>
                </li>
                <li className="my-p d-flex my-2">
                  <div class="material-symbols-outlined me-4">location_on</div>
                  <p className="me-4">故宮博物院 : </p>
                  <p>3公里</p>
                </li>
                <li className="my-p d-flex my-2">
                  <div class="material-symbols-outlined me-4">location_on</div>
                  <p className="me-4">故宮博物院 : </p>
                  <p>3公里</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelIntro;
