import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/layouts/Navbar';
import Footer from './pages/layouts/Footer';
import UploadTrip from './pages/UploadTrip/UploadTrip';
import TripSearchBar from './pages/ProductList/ListComponent/TripSearchBar/TripSearchBar';
// import TestList from './pages/ProductList/TestList';
// import ProductDetails from './pages/ProductDetails/ProductDetails';
// import Comment from './pages/ProductDetails/DetailComponet/Comment/Comment';
// import PlanDetails from './pages/ProductDetails/DetailComponet/MainSelector/PlanDetails/PlanDetails';
// import MainSelector from './pages/ProductDetails/DetailComponet/MainSelector/MainSelector';

import './test.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="test-container">
          <Routes>
            <Route path="/" element={<TripSearchBar />}/>
            {/* <Route path="tripList" element={<TestList />} /> */}
            {/* <Route path="tripDetails" element={<ProductDetails />} /> */}
          </Routes>
          {/* <Comment /> */}
          {/* <PlanDetails /> */}
          {/* <MainSelector /> */}
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
