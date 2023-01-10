import React from 'react';
import HotelDetailPic from './HotelConponent/HotelDetailPic/HotelDetailPic';
import HotelIntro from './HotelConponent/HotelIntro/HotelIntro';
import RoomSelect from './HotelConponent/RoomSelect/RoomSelect';

const HotelDetail = () => {
  return (
    <>
      <HotelDetailPic />
      <HotelIntro />
      <RoomSelect />
    </>
  );
};

export default HotelDetail;
