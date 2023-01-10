import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import "./layout/payment.scss"
import ProgressBar from './PaymentComponent/ProgressBar';
const Payment = () => {
  return <>
  <ProgressBar/>
  <div className='container'>Money</div>
   
  </>;
};

export default Payment;
