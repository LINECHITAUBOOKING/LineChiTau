import React from 'react';
import './HotelDetailPic.scss';
import pic3 from '../../img/Hotel1/rocky-DBL.jpg';

const HotelDetailPic = () => {
  return (
    <>
      <div className="Hotel-Detail-Pic container-xxl">
        <div className="d-flex">
          <div>
            <img src={pic3} />
          </div>
          <div>
            <div>
              <img src={pic3} />
            </div>
            <div>
              <img src={pic3} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelDetailPic;
