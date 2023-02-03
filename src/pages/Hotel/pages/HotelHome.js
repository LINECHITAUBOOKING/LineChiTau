import React, { useState, useEffect } from 'react';
import HotelBanner from '../HotelConponent/HotelBanner/HotelBanner';
import PopularCategory from '../HotelConponent/PopularCategory/PopularCategory';
import PopularSearch from '../HotelConponent/PopularSearch/PopularSearch';
import PositiveFeedback from '../HotelConponent/PositiveFeedback/PositiveFeedback';
import Recommend from '../HotelConponent/Recommend/Recommend';
import RecommendToC from '../HotelConponent/RecommendToC/RecommendToC';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './HotelHome.scss';

const Hotel = (props) => {
  const [error, setError] = useState(null);
  const { companyName } = useParams();
  // console.log(companyName);

  // 為了處理網址
  let navigate = useNavigate();

  const [hotelDetail, setHotelDetail] = useState({});
  const [roomDetail, setRoomDetail] = useState([]);
  useEffect(() => {
    async function getHotelDetail() {
      let response = await axios.get(
        `http://localhost:3001/api/hotelDetail/${companyName}`
      );
      // console.log(response.data[0]);
      setHotelDetail(response.data[0]);
    }
    async function getRoomDetail() {
      let response = await axios.get(
        `http://localhost:3001/api/hotelDetail/${companyName}/rooms`
      );
      // console.log(response.data);
      setRoomDetail(response.data);
    }
    getHotelDetail();
    getRoomDetail();
  }, []);
  return (
    <>
      <div className="banner position-relative">
        <HotelBanner
          positionAbsolute={'position-absolute'}
          bannerSearchBar={'banner-search-bar'}
        />
      </div>
      <PopularSearch />
      <PopularCategory />
      <Recommend />
      <RecommendToC />
      <PositiveFeedback />
    </>
  );
};

export default Hotel;
