import React, { useEffect, useState } from 'react';
import HotellistBox from '../HotelConponent/HotellistBox/HotellistBox';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import HotelBanner from '../HotelConponent/HotelBanner/HotelBanner';

const Hotellist = (props) => {
  return (
    <>
      <HotelBanner
        justifyContentCenter={'justify-content-center'}
        my2={'my-2'}
        widthControl={'width-control'}
      />
      <HotellistBox />
    </>
  );
};

export default Hotellist;
