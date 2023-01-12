import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './layout/payment.scss';
import ProgressBar from './PaymentComponent/ProgressBar';
import TravelPaymentDetail from './PaymentDetail/TravelPaymentDetail';
import TravelPaymentCheckOut from './PaymentCheckOut/TravelPaymentCheckOut';
import HotelPaymentDetail from './PaymentDetail/HotelPaymentDetail';
const Payment1 = () => {
  return (
    <>
      <ProgressBar />
      <Routes>
        <Route path="/1" element={<TravelPaymentDetail />} />
        <Route path="/" element={<TravelPaymentCheckOut />} />
        <Route path="/2" element={<HotelPaymentDetail />} />

      </Routes>
    </>
  );
};

export default Payment1;
