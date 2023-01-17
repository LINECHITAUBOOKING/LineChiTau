import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/layouts/Navbar';
import Footer from './pages/layouts/Footer';
// import HotellistBox from './pages/ProductList/HotellistBox/HotellistBox';

import './test.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="test-container"></div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
