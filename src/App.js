import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './css/global.css';
import Profile from './pages/Profile/Profile';
import HotelHome from './pages/Hotel/pages/HotelHome';
import Travel from './pages/Travel/Travel';
import Ticket from './pages/Ticket/Ticket';
import Navbar from './pages/layouts/Navbar';
import Footer from './pages/layouts/Footer';
import Hotellist from './pages/Hotel/pages/Hotellist';
import HotelDetail from './pages/Hotel/pages/HotelDetail';
import Hotel from './pages/Hotel/Hotel';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hotel />}>
            <Route index element={<HotelHome />}></Route>
            <Route path="/HotelHome" element={<HotelHome />} />
            <Route path="/Hotellist" element={<Hotellist />} />
            <Route path="/HotelDetail" element={<HotelDetail />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
