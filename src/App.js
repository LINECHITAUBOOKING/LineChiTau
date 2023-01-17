import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/layouts/Navbar';
import Footer from './pages/layouts/Footer';
// import ProductsCard from './pages/ProductList/ProductsCard/ProductsCard';
// import ListMap from './pages/ProductList/ListMap/ListMap';
// import HotellistBox from './pages/ProductList/HotellistBox/HotellistBox';
// import NormalSort from './pages/ProductList/NormalSort/NormalSort';
// import PopupSort from './pages/ProductList/PopupSort/PopupSort';
import TestList from './pages/ProductList/TestList';
import './test.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="test-container">
          {/* <NormalSort label="台北飯店" name="Taipei" /> */}
          {/* <PopupSort label="北部" area="southern" /> */}
          {/* <HotellistBox /> */}
          <TestList />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
