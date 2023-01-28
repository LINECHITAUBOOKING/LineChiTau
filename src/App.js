import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/layouts/Navbar';
import Footer from './pages/layouts/Footer';
import ProductDetails from './pages/ProductDetails/ProductDetails';


import './test.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="test-container">
          <ProductDetails />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
