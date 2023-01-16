import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/layouts/Navbar';
import Footer from './pages/layouts/Footer';
// import ProductCard from './pages/ProductList/ProductCard/ProductCard';
// import ListMap from './pages/ProductList/ListMap/ListMap';
import HotellistBox from './pages/ProductList/HotellistBox/HotellistBox';
import './test.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="test-container">
          {/* <ProductCard /> */}
          <HotellistBox />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
