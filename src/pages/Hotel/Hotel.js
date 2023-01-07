import React from 'react';
import HotelBanner from './HotelConponent/HotelBanner/HotelBanner';
import PopularCategory from './HotelConponent/PopularCategory/PopularCategory';
import PopularSearch from './HotelConponent/PopularSearch/PopularSearch';
import Recommend from './HotelConponent/Recommend/Recommend';
import RecommendToC from './HotelConponent/RecommendToC/RecommendToC';

const Hotel = () => {
  return (
    <>
      <HotelBanner />
      <PopularSearch />
      <PopularCategory />
      <Recommend />
      <RecommendToC />
    </>
  );
};

export default Hotel;
