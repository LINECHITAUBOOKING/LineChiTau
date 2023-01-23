import React, { useState } from 'react';
import './HotelDetailPic.scss';
import pic3 from '../../img/Hotel1/rocky-DBL.jpg';
import DetailPicBox from '../DetailPicBox/DetailPicBox';

const HotelDetailPic = (props) => {
  const [openPicBox, setOpenPicBox] = useState(false)
  return (
    <>
      <div className="position-fixed">
        {openPicBox && <DetailPicBox />}
      </div>
      <div className="container-xxl Hotel-Detail-Pic"
        onClick={() => { setOpenPicBox(true) }}
      >
        <div className="row mt-4">
          <div className="col-8 left-side">
            <div className="main-pic-box">
              <img src={pic3} className="main-pic" alt="main" />
            </div>
          </div>
          <div className="col-4 d-flex flex-column justify-content-between">
            <div className="vice-pic-box">
              <img src={pic3} className="vice-pic" alt="vice" />
            </div>
            <div className="vice-pic-box">
              <img src={pic3} className="vice-pic" alt="vice" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default HotelDetailPic;
