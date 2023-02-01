import React, { useEffect, useState } from 'react';
import HotellistBox from '../HotelConponent/HotellistBox/HotellistBox';
import SearchBar from '../HotelConponent/SearchBar/SearchBar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Hotellist = (props) => {
  const [error, setError] = useState();
  const { region } = useParams();
  let navigate = useNavigate();
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    async function getHotelList() {
      let response = await axios.get(
        `http://localhost:3001/api/hotelList/${region}`
      );
      console.log(response.data);
      setHotelList(response.data);
    }

    getHotelList();
  }, []);
  const hotelListArrange = hotelList.map((room, i) => {
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
    return room;
  });

  return (
    <>
      <SearchBar hotelListArrange={hotelListArrange} />
      <HotellistBox hotelListArrange={hotelListArrange} />
    </>
  );
};

export default Hotellist;
