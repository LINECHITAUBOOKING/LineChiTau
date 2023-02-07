import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import './css/global.css';
import Profile from './pages/Profile/Profile';
import HotelHome from './pages/Hotel/pages/HotelHome';
import Ticket from './pages/Ticket/Ticket';
import Payment from './pages/Payment/layout/Payment';
import ShoppingCart from './pages/Payment/ShoppingCart/ShoppingCart';
import TravelPaymentDetail from './pages/Payment/PaymentDetail/TravelPaymentDetail';
import TravelPaymentCheckOut from './pages/Payment/PaymentCheckOut/TravelPaymentCheckOut';
import HotelPaymentDetail from './pages/Payment/PaymentDetail/HotelPaymentDetail';
import HotelPaymentCheckOut from './pages/Payment/PaymentCheckOut/HotelPaymentCheckOut';
import Navbar from './pages/layouts/Navbar';
import Footer from './pages/layouts/Footer';
import List from './pages/Profile/pages/List/List';
import Coupon from './pages/Profile/pages/Coupon/Coupon';
import Mylove from './pages/Profile/pages/Mylove/Mylove';
import Message from './pages/Profile/pages/Message/Message';
import Pay from './pages/Profile/pages/Pay/Pay';
import Setting from './pages/Profile/pages/Setting/Setting';
import ListDetail from './pages/Profile/pages/List/ListDetail/ListDetail';
import Demo from './utils/Demo';
import TripList from './pages/TripList/TripList';
import TripProductDetail from './pages/TripProductDetails/TripProductDetails';
import UploadTrip from './pages/UploadTrip/UploadTrip';

// import React, { useState, useContext } from 'react';
import { JwtCsrfTokenProvider } from './utils/csrf-hook/useJwtCsrfToken';
import Hotellist from './pages/Hotel/pages/Hotellist';
import HotelDetail from './pages/Hotel/pages/HotelDetail';
import Hotel from './pages/Hotel/Hotel';
import Alllist from './pages/Profile/pages/List/Alllist';

import ScrollToTop from './pages/layouts/ScrollToTop';
function App() {
  return (
    <>
      <JwtCsrfTokenProvider>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Hotel />}>
              <Route index element={<HotelHome />}></Route>
              <Route path="/HotelHome" element={<HotelHome />} />
              <Route path="/Hotellist/:region" element={<Hotellist />} />
              <Route
                path="/HotelDetail/:companyName"
                element={<HotelDetail />}
              />
            </Route>
            <Route path="/tripList" element={<TripList />}></Route>
            <Route path="/uploadTrip" element={<UploadTrip />}></Route>
            <Route
              path="/tripProductDetail"
              element={<TripProductDetail />}
            ></Route>
            <Route path="login" element={<Demo />} />
            <Route path="profile" element={<Profile />}>
              <Route index element={<List />} />
              <Route path="list" element={<List />} />
              <Route path="alllist" element={<Alllist />} />
              <Route path="listdetail/:id" element={<ListDetail />} />
              <Route path="coupon" element={<Coupon />} />
              <Route path="mylove" element={<Mylove />} />
              <Route path="message" element={<Message />} />
              <Route path="pay" element={<Pay />} />
              <Route path="setting" element={<Setting />} />
            </Route>
            <Route path="ticket" element={<Ticket />} />
            <Route path="/payment" element={<Payment />}>
              <Route index path="" element={<ShoppingCart />} />
              <Route path="ShoppingCart" element={<ShoppingCart />} />
              <Route
                path="TravelPaymentDetail"
                element={<TravelPaymentDetail />}
              />
              <Route
                path="TravelPaymentCheckOut"
                element={<TravelPaymentCheckOut />}
              />
              <Route
                path="HotelPaymentDetail"
                element={<HotelPaymentDetail />}
              />
              <Route
                path="HotelPaymentCheckOut"
                element={<HotelPaymentCheckOut />}
              />
            </Route>
          </Routes>
        </ScrollToTop>
        <Footer />
      </JwtCsrfTokenProvider>
    </>
  );
}

export default App;
