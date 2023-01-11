import React from 'react';
import HotelDetailPic from './HotelConponent/HotelDetailPic/HotelDetailPic';
import HotelIntro from './HotelConponent/HotelIntro/HotelIntro';
import RoomSelect from './HotelConponent/RoomSelect/RoomSelect';
import Transpotation from './HotelConponent/Transpotation/Transpotation';
import RoomService from './HotelConponent/RoomService/RoomService';
import RoomRule from './HotelConponent/RoomRule/RoomRule';

const HotelDetail = () => {
  return (
    <>
      <HotelDetailPic />
      <HotelIntro />
      <RoomSelect />
      <Transpotation />
      <RoomService />
      <RoomRule />
    </>
  );
};

export default HotelDetail;
