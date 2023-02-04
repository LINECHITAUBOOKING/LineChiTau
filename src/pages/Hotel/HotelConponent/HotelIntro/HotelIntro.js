import React, { useState, useEffect } from 'react';
import './HotelIntro.scss';

const HotelIntro = (props) => {
  const { hotelDetail } = props;

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFixed, setisFixed] = useState(false);
  let stars = [];
  for (let i = 1; i <= hotelDetail.stars; i++) {
    stars.push(
      <span class="material-symbols-outlined hotel-star-fill">star</span>
    );
  }

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
  } = hotelDetail;
  const hotelServiceList = [
    { service: 'WIFI', value: wifi, icon: 'wifi' },
    { service: '泳池', value: pool, icon: 'pool' },
    { service: '健身房', value: gym, icon: 'fitness_center' },
    { service: '餐廳', value: restaurant, icon: 'restaurant' },
    { service: 'BAR', value: bar, icon: 'local_bar' },
    { service: '停車場', value: parking, icon: 'local_parking' },
    { service: '洗衣間', value: laundry, icon: 'local_laundry_service' },
    { service: '會議室', value: meeting_room, icon: 'meeting_room' },
    { service: '娛樂間', value: arcade, icon: 'sports_esports' },
    { service: '電梯', value: elevator, icon: 'elevator' },
    { service: '行李寄放', value: store_luggage, icon: 'luggage' },
    { service: '櫃台服務', value: counter, icon: 'countertops' },
  ];
  const hotelServiceListFilter = hotelServiceList.filter((v, i) => {
    return v.value !== 0;
  });

  const chunk = 3;
  const hotelServiceListFilterChunk = [];
  for (let i = 0; i < hotelServiceListFilter.length; i += chunk) {
    hotelServiceListFilterChunk.push(
      hotelServiceListFilter.slice(i, i + chunk)
    );
  }
  // console.log(hotelServiceListFilter);

  const handleScroll = (event) => {
    setScrollPosition(window.pageYOffset);
    // console.log(window.pageYOffset)
    let fixed = window.pageYOffset >= 695 ? true : false;
    setisFixed(fixed);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className="container-xxl HotelIntro">
        <nav className={isFixed ? 'fixed' : 'mt-3'}>
          <ul className="list-unstyled d-flex justify-content-around my-0">
            <a href="#room">
              <li>客房</li>
            </a>
            <li>交通位置</li>
            <li>評論區</li>
            <li>注意事項</li>
          </ul>
        </nav>
        <div className="row mt-4">
          <div className="col-8 left-side ">
            <h3 className="my-topic">{hotelDetail.company_name}</h3>
            <div>{stars}</div>
            <p className="my-p mt-2">{hotelDetail.address}</p>
            <div className="my-3">
              <h4 className="my-4 my-heading">飯店設施服務</h4>
              <div className="">
                {hotelServiceListFilterChunk.map((v_ul, i_ul) => {
                  return (
                    <ul className="list-unstyled service-box row" key={i_ul}>
                      {v_ul.map((service, service_i) => {
                        return (
                          <li
                            className="nav-foot d-flex my-2 col-4"
                            key={service.service}
                          >
                            <div class="material-symbols-outlined me-4">
                              {service.icon}
                            </div>
                            <p>{service.service}</p>
                          </li>
                        );
                      })}
                    </ul>
                  );
                })}
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
