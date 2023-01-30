import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/layouts/Navbar';
import Footer from './pages/layouts/Footer';
import Comment from './pages/ProductDetails/DetailComponet/Comment/Comment';
import ProductDetails from './pages/ProductDetails/ProductDetails';


import './test.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="test-container">
          <Comment />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
