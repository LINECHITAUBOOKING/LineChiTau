import React, { useEffect, useState } from 'react';
import './HotellistBox.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import HotelListFilter from '../HotelListFilter/HotelListFilter';
import axios from 'axios';

const HotellistBox = ({ hotelServiceListArray }) => {
  const [error, setError] = useState();
  const { region } = useParams();
  const [hotelList, setHotelList] = useState([]);
  const [filterCondition, setFilterCondition] = useState({
    type: '',
    hotelService: [],
    roomService: [],
  });
  console.log('aaaa', filterCondition);
  const [hotelListArrange, setHotelListArrange] = useState([]);
  useEffect(() => {
    async function getHotelList() {
      let response = await axios.get(
        `http://localhost:3001/api/hotelList/${region}`
      );
      // console.log(response.data);
      setHotelList(response.data);
    }

    getHotelList();
  }, [region]);
  useEffect(() => {
    const newhotelListArrange = hotelList.map((room, i) => {
      const {
        wifi,
        pool,
        gym,
        restaurant,
        bar,
        parking,
        laundry,
        meeting_room,
        arcade,
        elevator,
        store_luggage,
        counter,
      } = room;
      const hotelServiceList = [
        { service: 'WIFI', value: wifi },
        { service: '泳池', value: pool },
        { service: '健身房', value: gym },
        { service: '餐廳', value: restaurant },
        { service: 'BAR', value: bar },
        { service: '停車場', value: parking },
        { service: '洗衣間', value: laundry },
        { service: '會議室', value: meeting_room },
        { service: '娛樂間', value: arcade },
        { service: '電梯', value: elevator },
        { service: '行李寄放', value: store_luggage },
        { service: '櫃台服務', value: counter },
      ];

      const hotelServiceListFilter = hotelServiceList.filter((v, i) => {
        return v.value !== 0;
      });
      room.service = hotelServiceListFilter;
      room.translate = 0;
      return room;
    });
    setHotelListArrange(newhotelListArrange);
  }, [hotelList]);

  const [hotelListArrangeState, setHotelListArrangeState] = useState([]);
  useEffect(() => {
    if (hotelListArrange.length > 0) setHotelListArrangeState(hotelListArrange);
  }, [hotelListArrange]);

  const hotelType = ['飯店', '民宿', '青旅'];
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
            <HotelListFilter
              hotelServiceListArray={hotelServiceListArray}
              hotelType={hotelType}
              setFilterCondition={setFilterCondition}
              filterCondition={filterCondition}
            />
          </div>
          <div className="col-9">
            {hotelListArrangeState.length === 0 ? (
              <p className="title my-banner">查無資料</p>
            ) : (
              hotelListArrangeState.map((room, room_i) => {
                return (
                  <div className="d-flex" key={room_i}>
                    <div className="products-card row mb-4">
                      <div className="d-flex hotellist-pic-box col-3 px-0 my-border-radius position-relative">
                        <div
                          className="material-symbols-outlined detail-pic-arrow position-absolute detail-pic-arrowpre text-center"
                          onClick={() => {
                            const newHotelListArrangeState = [
                              ...hotelListArrangeState,
                            ];
                            newHotelListArrangeState.map((hotel) => {
                              let bannerLength =
                                room.company_banner.split(',').length;
                              if (hotel.company_name === room.company_name) {
                                if (hotel.translate === 0) {
                                  hotel.translate = (bannerLength - 1) * -300;
                                } else {
                                  hotel.translate += 300;
                                }
                              }
                              setHotelListArrangeState(
                                newHotelListArrangeState
                              );
                            });
                          }}
                        >
                          chevron_left
                        </div>
                        <div
                          className="d-flex display-pic"
                          style={{
                            transform: `translateX(${room.translate}px)`,
                          }}
                        >
                          {room.company_banner.split(',').map((pic, i) => {
                            return (
                              <div key={i}>
                                <img
                                  src={`/images/${pic}`}
                                  alt={room.company_name}
                                  className="products-card-pic"
                                />
                              </div>
                            );
                          })}
                        </div>
                        <div
                          className="material-symbols-outlined detail-pic-arrow position-absolute detail-pic-arrownext"
                          onClick={() => {
                            const newHotelListArrangeState = [
                              ...hotelListArrangeState,
                            ];
                            let bannerLength =
                              room.company_banner.split(',').length;
                            newHotelListArrangeState.map((hotel) => {
                              if (hotel.company_name === room.company_name) {
                                if (
                                  hotel.translate <=
                                  (bannerLength - 1) * -300
                                ) {
                                  hotel.translate = 0;
                                } else {
                                  hotel.translate -= 300;
                                }
                              }
                              // console.log(hotel.translate);
                              setHotelListArrangeState(
                                newHotelListArrangeState
                              );
                            });
                          }}
                        >
                          chevron_right
                        </div>
                      </div>
                      <div className="mx-3 my-2 col px-0">
                        <h5 className="nav-foot">{room.company_name}</h5>
                        <p className="my-p text-hide">{room.introduction}</p>
                        <ul className="list-unstyled d-flex">
                          {room.service.map((service, service_i) => {
                            if (service_i <= 6)
                              return (
                                <li key={service_i}>
                                  <button className="search-tag my-border-radius my-p mx-1">
                                    {service.service}
                                  </button>
                                </li>
                              );
                          })}
                        </ul>
                        <div className="d-flex justify-content-between my-p">
                          <div className="d-flex">
                            <div class="material-symbols-outlined ej-fill-icon">
                              location_on
                            </div>
                            <p>{room.address}</p>
                          </div>
                          <div className="d-flex">
                            <div class="material-symbols-outlined ej-fill-icon">
                              monetization_on
                            </div>
                            <p>
                              {room.lowest_price}{' '}
                              <span className="my-p-small">起</span> / 晚
                            </p>
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
                    <Link
                      to={`/HotelDetail/${room.company_name}`}
                      className="my-p booking-btn d-flex flex-column justify-content-center pe-2"
                    >
                      <p>訂</p>
                      <p>房</p>
                      <p>去</p>
                      <span class="material-symbols-outlined">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                );
              })
            )}

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
