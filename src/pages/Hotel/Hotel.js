import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Calendar from './HotelConponent/Calendar/Calendar';

const Hotel = () => {
  return (
    <>
      <Outlet />
      <Calendar />
    </>
  );
};

export default Hotel;
