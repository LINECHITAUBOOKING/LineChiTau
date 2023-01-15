import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/layouts/Navbar';
import Footer from './pages/layouts/Footer';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
// import MiniShoppingCart from './pages/ShoppingCart/MiniShoppingCart/MiniShoppingCart';
// import './test.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ShoppingCart />
        <Footer />
      </BrowserRouter>
      {/* <div className="test-container"> */}
      {/* <MiniShoppingCart /> */}
      {/* </div> */}
    </>
  );
}

export default App;
