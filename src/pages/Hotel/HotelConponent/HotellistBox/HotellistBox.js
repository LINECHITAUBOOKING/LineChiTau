import React from 'react';
import './HotellistBox.scss';
import pic3 from '../../img/Hotel1/rocky-DBL.jpg';
import { Link } from 'react-router-dom';
import MapTest from '../MapTest/MapTest';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

const HotellistBox = () => {
  const position = [[25.03, 121.6], [25.14, 121.71]]
  const position1 = [25.14, 121.71]
  let DefaultIcon = L.icon({
    iconUrl: icon,
    // shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  return (
    <>
      <div className="container-xl hotellist-box">
        <div className="d-flex justify-content-between align-items-end">
          <p className="my-topic">關鍵字：共 123456 項 結果 </p>
          <ul className="list-unstyled d-flex my-p">
            <li>排序：</li>
            <li>人氣 | </li>
            <li>評價 | </li>
            <li>價格 ▲ | </li>
            <li>價格▼</li>
          </ul>
        </div>


        <div className="row mb-5">
          <div className="col-3 px-3">
            <div className="map m-auto position-relative">
              <div>
                <MapContainer center={position1} zoom={10} scrollWheelZoom={false} style={{ height: '200px' }}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {position.map((v, i) => {
                    return (
                      <Marker position={v}>
                        <Popup>
                          <Link to="/HotelDetail">前往飯店</Link>
                        </Popup>
                      </Marker>
                    )
                  })}
                </MapContainer>
              </div>
            </div>
            <div className="filter-box">
              <div className="my-border-radius location-type-box m-auto mt-3">
                <div className="px-5 py-3 form-check">
                  <h5 className="filter-box-title nav-foot">所在地</h5>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      name="north"
                      checked
                      className="me-3"
                    />
                    <label for="north" className="me-3 my-p">
                      北部
                    </label>
                    <span class="material-symbols-outlined arrow-right">
                      arrow_right
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <input type="checkbox" name="middle" className="me-3" />
                    <label for="middle" className="me-3 my-p">
                      中部
                    </label>
                    <span class="material-symbols-outlined arrow-right">
                      arrow_right
                    </span>
                  </div>
                </div>
                <div className="px-5 py-3 form-check">
                  <h5 className="filter-box-title nav-foot">類型</h5>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      name="north"
                      checked
                      className="me-3"
                    />
                    <label for="north" className="me-3 my-p">
                      民宿
                    </label>
                    <span class="material-symbols-outlined arrow-right">
                      arrow_right
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <input type="checkbox" name="middle" className="me-3" />
                    <label for="middle" className="me-3 my-p">
                      飯店
                    </label>
                    <span class="material-symbols-outlined arrow-right">
                      arrow_right
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-border-radius location-type-box m-auto mt-3">
                <div className="px-5 py-3 form-check">
                  <h5 className="filter-box-title nav-foot">價格</h5>
                  <div className="d-flex align-items-center my-3">
                    <input
                      type="checkbox"
                      name="north"
                      checked
                      className="me-3"
                    />
                    <label for="north" className="me-3 my-p">
                      0 - 2000
                    </label>
                  </div>
                  <div className="d-flex align-items-center my-3">
                    <input type="checkbox" name="middle" className="me-3" />
                    <label for="middle" className="me-3 my-p">
                      2000 - 4000
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-border-radius location-type-box m-auto mt-3">
                <div className="px-5 py-3 form-check">
                  <h5 className="filter-box-title nav-foot">供餐</h5>
                  <div className="d-flex align-items-center my-3">
                    <input
                      type="checkbox"
                      name="north"
                      checked
                      className="me-3"
                    />
                    <label for="north" className="me-3 my-p">
                      自炊
                    </label>
                  </div>
                  <div className="d-flex align-items-center my-3">
                    <input type="checkbox" name="middle" className="me-3" />
                    <label for="middle" className="me-3 my-p">
                      含早餐
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="products-card d-flex mb-4">
              <div>
                <img
                  src={pic3}
                  className="products-card-pic my-border-radius"
                  alt="pic3"
                ></img>
              </div>
              <div className="mx-3 my-2">
                <h5 className="nav-foot">娜路彎銀河酒店</h5>
                <p className="my-p">
                  娜路彎銀河酒店位於台東市，設有全年開放的室外泳池和 SPA
                  中心。此住宿附設免費私人停車位。 此住宿距離台東火車站 10
                  分鐘車程。此住宿距離鐵花村音樂聚落和台東鐵道藝術村。
                </p>
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
                    <div class="material-symbols-outlined">location_on</div>
                    <p>台東市</p>
                  </div>
                  <div className="d-flex">
                    <div class="material-symbols-outlined">monetization_on</div>
                    <p>1000 / 晚</p>
                  </div>
                  <div className="d-flex">
                    <div class="material-symbols-outlined">bookmark</div>
                    <p>收藏</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="products-card d-flex mb-4">
                <div>
                  <img
                    src={pic3}
                    className="products-card-pic my-border-radius"
                    alt="pic3"
                  ></img>
                </div>
                <div className="mx-3 my-2">
                  <h5 className="nav-foot">娜路彎銀河酒店</h5>
                  <p className="my-p">
                    娜路彎銀河酒店位於台東市，設有全年開放的室外泳池和 SPA
                    中心。此住宿附設免費私人停車位。 此住宿距離台東火車站 10
                    分鐘車程。此住宿距離鐵花村音樂聚落和台東鐵道藝術村。
                  </p>
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
                      <div class="material-symbols-outlined">location_on</div>
                      <p>台東市</p>
                    </div>
                    <div className="d-flex">
                      <div class="material-symbols-outlined">
                        monetization_on
                      </div>
                      <p>1000 / 晚</p>
                    </div>
                    <div className="d-flex">
                      <div class="material-symbols-outlined">bookmark</div>
                      <p>收藏</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/HotelDetail"
                className="my-p booking-btn d-flex flex-column justify-content-center pe-2"
              >
                <p>訂</p>
                <p>房</p>
                <p>去</p>
                <span class="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <nav>
              <ul className="list-unstyled d-flex">
                <li className="pagenation-border px-2 my-p px-2 d-flex justify-content-center previous">
                  <span class="material-symbols-outlined pagenation-arrow">
                    navigate_before
                  </span>
                </li>
                <li className="pagenation-border px-2 my-p px-2">
                  <a>1</a>
                </li>
                <li className="pagenation-border px-2 my-p px-2">
                  <a>2</a>
                </li>
                <li className="pagenation-border px-2 my-p px-2">
                  <a>3</a>
                </li>
                <li className="pagenation-border px-2 my-p px-2 d-flex justify-content-center next">
                  <span class="material-symbols-outlined pagenation-arrow">
                    navigate_next
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotellistBox;
