import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import pic3 from '../../img/Hotel1/rocky-DBL.jpg';
import './RoomSelect.scss';

const RoomSelect = (props) => {
  const { roomDetail } = props;
  const [isOpenService, setIsOpenService] = useState(false);
  // console.log('roomDetail', roomDetail);

  const roomDetailArrange = roomDetail.map((v, i) => {
    return {
      room_name: v.room_name,
      room_type: v.room_type.toString(),
      price: v.price,
      amount: v.amount.toString(),
      description: v.description,
      picture: v.picture,
      room: v.room,
      寵物友善房: v.pet,
      液晶電視: v.tv,
      提供餐點: v.meal,
      迷你吧: v.mini_bar,
      窗戶房: v.window,
      邊間: v.corner,
      高樓層: v.high_floor,
      獨立浴室: v.bathroom,
      浴缸房: v.tub,
      淋浴間: v.shower,
      沙發: v.sofa,
      吹風機: v.hair_dryer,
      冷氣機: v.cooler,
      暖氣機: v.warmer,
      晨喚服務: v.morning_call,
      免費拖鞋: v.slipper,
      睡袍: v.pajamas,
      空氣清淨機: v.air_purifier,
    };
  });
  // console.log('roomDetailArrange', roomDetailArrange);
  const chunk = 3;
  const roomDetailArrangeChunk = [];
  for (let i = 0; i < roomDetailArrange.length; i += chunk) {
    roomDetailArrangeChunk.push(roomDetailArrange.slice(i, i + chunk));
  }

  return (
    <>
      <div className="container-xxl room-select-box" id="room">
        <h3 className="h3">選擇房型</h3>
        <SearchBar />
        <div>
          <div>
            {roomDetailArrangeChunk.map((firstChunk, firstChunk_i) => {
              return (
                <ul
                  className="list-unstyled d-flex justify-content-start mb-5"
                  key={firstChunk_i}
                >
                  {firstChunk.map((room, room_i) => {
                    return (
                      <li className="room-type-card mx-5" key={room_i}>
                        <div className="room-pic-box">
                          <img src={pic3} className="room-pic" alt="room-pic" />
                        </div>
                        <div className="px-3 pt-3 mb-1">
                          <h5 className="my-heading">{room.room_name}</h5>
                          <p className="my-p">{room.description}</p>
                          <ul className="my-p mb-1">
                            <li>
                              最多可入住 {room.room_type}
                              人(含額外成人與孩童)
                            </li>
                            {Object.keys(room)
                              .filter((key) => room[key] === 1)
                              .map((v, i) => {
                                if (i <= 4) {
                                  return <li key={i}>{v}</li>;
                                } else if (i > 4) {
                                  return (
                                    <div
                                      key={i}
                                      className={
                                        isOpenService ? 'd-none' : 'd-none'
                                      }
                                    >
                                      <li key={i}>{v}</li>
                                    </div>
                                  );
                                }
                              })}
                          </ul>
                          <div className="d-flex my-p">
                            <p
                              className="me-1"
                              // onClick={setIsOpenService(!isOpenService)}
                            >
                              展開全部
                            </p>
                            <div class="material-symbols-outlined play-arrow">
                              play_arrow
                            </div>
                          </div>
                          <h6 className="nav-foot-small mb-1">可全額退款</h6>
                          <p className="my-p">入住兩周前</p>
                          <div className="my-p">
                            <p className="mb-1">NT${room.price} / 每晚</p>
                            <p className="mb-1">價格明細</p>
                            <p className="mb-1 my-p-small">
                              NT${room.price} / 每晚 * 共1晚
                            </p>
                            <p className="mb-1">總價 NT${room.price}</p>
                          </div>
                        </div>
                        <div className="text-center select-btn-box pt-2">
                          <button className="my-p booking-select-btn px-3 mb-2">
                            訂房
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomSelect;
