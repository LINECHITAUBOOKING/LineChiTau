import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/layouts/Navbar';
import Footer from './pages/layouts/Footer';
import TestList from './pages/ProductList/TestList';
// import Comment from './pages/ProductDetails/DetailComponet/Comment/Comment';
// import ProductDetails from './pages/ProductDetails/ProductDetails';
// import PlanDetails from './pages/ProductDetails/DetailComponet/MainSelector/PlanDetails/PlanDetails';
// import MainSelector from './pages/ProductDetails/DetailComponet/MainSelector/MainSelector';

import './test.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="test-container">
          {/* <Comment /> */}
          {/* <PlanDetails /> */}
          {/* <MainSelector /> */}
          <TestList />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
