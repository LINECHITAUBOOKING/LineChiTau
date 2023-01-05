import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './css/global.css';
import Profile from './pages/Profile/Profile';
import Hotel from './pages/Hotel/Hotel';
import Travel from './pages/Travel/Travel';
import Ticket from './pages/Ticket/Ticket';
import Navbar from './pages/layouts/Navbar';
import Footer from './pages/layouts/Footer';
import List from './pages/Profile/pages/List/List';
import Coupon from './pages/Profile/pages/Coupon/Coupon';
import Mylove from './pages/Profile/pages/Mylove/Mylove';
import Message from './pages/Profile/pages/Message/Message';
import Pay from './pages/Profile/pages/Pay/Pay';
import Setting from './pages/Profile/pages/Setting/Setting';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hotel />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<List />} />
          <Route path="list" element={<List />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="mylove" element={<Mylove />} />
          <Route path="message" element={<Message />} />
          <Route path="pay" element={<Pay />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="/travel" element={<Travel />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
