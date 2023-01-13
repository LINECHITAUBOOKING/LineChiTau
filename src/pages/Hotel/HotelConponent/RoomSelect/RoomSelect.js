import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import pic3 from '../../img/Hotel1/rocky-DBL.jpg';
import './RoomSelect.scss';

const RoomSelect = () => {
  return (
    <>
      <div className="container-xxl room-select-box">
        <h3 className="h3">選擇房型</h3>
        <SearchBar />
        <div>
          <div>
            <ul className="list-unstyled d-flex justify-content-around mb-5">
              <li className="room-type-card">
                <div className="room-pic-box">
                  <img src={pic3} className="room-pic" alt="room-pic" />
                </div>
                <div className="px-3 pt-3 mb-1">
                  <h5 className="my-heading">Wonderful Room</h5>
                  <p className="my-p">
                    客房, 1 張特大雙人床,非吸煙房, 城市景觀
                  </p>
                  <ul className="my-p mb-1">
                    <li>山景</li>
                    <li>最多可入住 3 人(含額外成人與孩童)</li>
                    <li>1 張特大雙人床</li>
                    <li>免費無線上網</li>
                    <li>免費自助停車</li>
                    <li>可選擇入住時付款</li>
                  </ul>
                  <div className="d-flex my-p">
                    <p className="me-1">展開全部</p>
                    <div class="material-symbols-outlined play-arrow">
                      play_arrow
                    </div>
                  </div>
                  <h6 className="nav-foot-small mb-1">可全額退款</h6>
                  <p className="my-p">12月13日(星期二) 前</p>
                  <div className="my-p">
                    <p className="mb-1">NT$10,000 / 每晚</p>
                    <p className="mb-1">價格明細</p>
                    <p className="mb-1 my-p-small">NT$10,000 / 每晚 * 共1晚</p>
                    <p className="mb-1">總價 NT$10,000</p>
                  </div>
                </div>
                <div className="text-center select-btn-box pt-2">
                  <button className="my-p booking-select-btn px-3 mb-2">
                    訂房
                  </button>
                </div>
              </li>
              <li className="room-type-card">
                <div className="room-pic-box">
                  <img src={pic3} className="room-pic" alt="room-pic" />
                </div>
                <div className="px-3 pt-3 mb-1">
                  <h5 className="my-heading">Wonderful Room</h5>
                  <p className="my-p">
                    客房, 1 張特大雙人床,非吸煙房, 城市景觀
                  </p>
                  <ul className="my-p mb-1">
                    <li>山景</li>
                    <li>最多可入住 3 人(含額外成人與孩童)</li>
                    <li>1 張特大雙人床</li>
                    <li>免費無線上網</li>
                    <li>免費自助停車</li>
                    <li>可選擇入住時付款</li>
                  </ul>
                  <div className="d-flex my-p">
                    <p className="me-1">展開全部</p>
                    <div class="material-symbols-outlined play-arrow">
                      play_arrow
                    </div>
                  </div>
                  <h6 className="nav-foot-small mb-1">可全額退款</h6>
                  <p className="my-p">12月13日(星期二) 前</p>
                  <div className="my-p">
                    <p className="mb-1">NT$10,000 / 每晚</p>
                    <p className="mb-1">價格明細</p>
                    <p className="mb-1 my-p-small">NT$10,000 / 每晚 * 共1晚</p>
                    <p className="mb-1">總價 NT$10,000</p>
                  </div>
                </div>
                <div className="text-center select-btn-box pt-2">
                  <button className="my-p booking-select-btn px-3 mb-2">
                    訂房
                  </button>
                </div>
              </li>
              <li className="room-type-card">
                <div className="room-pic-box">
                  <img src={pic3} className="room-pic" alt="room-pic" />
                </div>
                <div className="px-3 pt-3 mb-1">
                  <h5 className="my-heading">Wonderful Room</h5>
                  <p className="my-p">
                    客房, 1 張特大雙人床,非吸煙房, 城市景觀
                  </p>
                  <ul className="my-p mb-1">
                    <li>山景</li>
                    <li>最多可入住 3 人(含額外成人與孩童)</li>
                    <li>1 張特大雙人床</li>
                    <li>免費無線上網</li>
                    <li>免費自助停車</li>
                    <li>可選擇入住時付款</li>
                  </ul>
                  <div className="d-flex my-p">
                    <p className="me-1">展開全部</p>
                    <div class="material-symbols-outlined play-arrow">
                      play_arrow
                    </div>
                  </div>
                  <h6 className="nav-foot-small mb-1">可全額退款</h6>
                  <p className="my-p">12月13日(星期二) 前</p>
                  <div className="my-p">
                    <p className="mb-1">NT$10,000 / 每晚</p>
                    <p className="mb-1">價格明細</p>
                    <p className="mb-1 my-p-small">NT$10,000 / 每晚 * 共1晚</p>
                    <p className="mb-1">總價 NT$10,000</p>
                  </div>
                </div>
                <div className="text-center select-btn-box pt-2">
                  <button className="my-p booking-select-btn px-3 mb-2">
                    訂房
                  </button>
                </div>
              </li>
            </ul>
            <ul className="list-unstyled d-flex justify-content-around mb-5">
              <li className="room-type-card">
                <div className="room-pic-box">
                  <img src={pic3} className="room-pic" alt="room-pic" />
                </div>
                <div className="px-3 pt-3 mb-1">
                  <h5 className="my-heading">Wonderful Room</h5>
                  <p className="my-p">
                    客房, 1 張特大雙人床,非吸煙房, 城市景觀
                  </p>
                  <ul className="my-p mb-1">
                    <li>山景</li>
                    <li>最多可入住 3 人(含額外成人與孩童)</li>
                    <li>1 張特大雙人床</li>
                    <li>免費無線上網</li>
                    <li>免費自助停車</li>
                    <li>可選擇入住時付款</li>
                  </ul>
                  <div className="d-flex my-p">
                    <p className="me-1">展開全部</p>
                    <div class="material-symbols-outlined play-arrow">
                      play_arrow
                    </div>
                  </div>
                  <h6 className="nav-foot-small mb-1">可全額退款</h6>
                  <p className="my-p">12月13日(星期二) 前</p>
                  <div className="my-p">
                    <p className="mb-1">NT$10,000 / 每晚</p>
                    <p className="mb-1">價格明細</p>
                    <p className="mb-1 my-p-small">NT$10,000 / 每晚 * 共1晚</p>
                    <p className="mb-1">總價 NT$10,000</p>
                  </div>
                </div>
                <div className="text-center select-btn-box pt-2">
                  <button className="my-p booking-select-btn px-3 mb-2">
                    訂房
                  </button>
                </div>
              </li>
              <li className="room-type-card">
                <div className="room-pic-box">
                  <img src={pic3} className="room-pic" alt="room-pic" />
                </div>
                <div className="px-3 pt-3 mb-1">
                  <h5 className="my-heading">Wonderful Room</h5>
                  <p className="my-p">
                    客房, 1 張特大雙人床,非吸煙房, 城市景觀
                  </p>
                  <ul className="my-p mb-1">
                    <li>山景</li>
                    <li>最多可入住 3 人(含額外成人與孩童)</li>
                    <li>1 張特大雙人床</li>
                    <li>免費無線上網</li>
                    <li>免費自助停車</li>
                    <li>可選擇入住時付款</li>
                  </ul>
                  <div className="d-flex my-p">
                    <p className="me-1">展開全部</p>
                    <div class="material-symbols-outlined play-arrow">
                      play_arrow
                    </div>
                  </div>
                  <h6 className="nav-foot-small mb-1">可全額退款</h6>
                  <p className="my-p">12月13日(星期二) 前</p>
                  <div className="my-p">
                    <p className="mb-1">NT$10,000 / 每晚</p>
                    <p className="mb-1">價格明細</p>
                    <p className="mb-1 my-p-small">NT$10,000 / 每晚 * 共1晚</p>
                    <p className="mb-1">總價 NT$10,000</p>
                  </div>
                </div>
                <div className="text-center select-btn-box pt-2">
                  <button className="my-p booking-select-btn px-3 mb-2">
                    訂房
                  </button>
                </div>
              </li>
              <li className="room-type-card">
                <div className="room-pic-box">
                  <img src={pic3} className="room-pic" alt="room-pic" />
                </div>
                <div className="px-3 pt-3 mb-1">
                  <h5 className="my-heading">Wonderful Room</h5>
                  <p className="my-p">
                    客房, 1 張特大雙人床,非吸煙房, 城市景觀
                  </p>
                  <ul className="my-p mb-1">
                    <li>山景</li>
                    <li>最多可入住 3 人(含額外成人與孩童)</li>
                    <li>1 張特大雙人床</li>
                    <li>免費無線上網</li>
                    <li>免費自助停車</li>
                    <li>可選擇入住時付款</li>
                  </ul>
                  <div className="d-flex my-p">
                    <p className="me-1">展開全部</p>
                    <div class="material-symbols-outlined play-arrow">
                      play_arrow
                    </div>
                  </div>
                  <h6 className="nav-foot-small mb-1">可全額退款</h6>
                  <p className="my-p">12月13日(星期二) 前</p>
                  <div className="my-p">
                    <p className="mb-1">NT$10,000 / 每晚</p>
                    <p className="mb-1">價格明細</p>
                    <p className="mb-1 my-p-small">NT$10,000 / 每晚 * 共1晚</p>
                    <p className="mb-1">總價 NT$10,000</p>
                  </div>
                </div>
                <div className="text-center select-btn-box pt-2">
                  <button className="my-p booking-select-btn px-3 mb-2">
                    訂房
                  </button>
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
