import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './css/global.css';
import Profile from './pages/Profile/Profile';
import Hotel from './pages/Hotel/Hotel';
import Travel from './pages/Travel/Travel';
import Ticket from './pages/Ticket/Ticket';
import Payment from './pages/Payment/layout/Payment';
import TravelPaymentDetail from './pages/Payment/PaymentDetail/TravelPaymentDetail';
import TravelPaymentCheckOut from './pages/Payment/PaymentCheckOut/TravelPaymentCheckOut';
import HotelPaymentDetail from './pages/Payment/PaymentDetail/HotelPaymentDetail';
import HotelPaymentCheckOut from './pages/Payment/PaymentCheckOut/HotelPaymentCheckOut';
import Navbar from './pages/layouts/Navbar';
import Footer from './pages/layouts/Footer';

import ScrollToTop from './pages/layouts/ScrollToTop';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Hotel />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/payment" element={<Payment />}>
              <Route
                index
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
      </BrowserRouter>
    </>
  );
}

export default App;
