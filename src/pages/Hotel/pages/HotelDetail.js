import React, { useState } from 'react';
import HotelDetailPic from '../HotelConponent/HotelDetailPic/HotelDetailPic';
import HotelIntro from '../HotelConponent/HotelIntro/HotelIntro';
import RoomSelect from '../HotelConponent/RoomSelect/RoomSelect';
import Transpotation from '../HotelConponent/Transpotation/Transpotation';
import RoomService from '../HotelConponent/RoomService/RoomService';
import RoomRule from '../HotelConponent/RoomRule/RoomRule';
import DetailPicBox from '../HotelConponent/DetailPicBox/DetailPicBox';

const HotelDetail = (props) => {

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
