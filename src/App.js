import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './css/global.css';
import Profile from './pages/Profile/Profile';
import Hotel from './pages/Hotel/Hotel';
import Travel from './pages/Travel/Travel';
import Ticket from './pages/Ticket/Ticket';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hotel />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
