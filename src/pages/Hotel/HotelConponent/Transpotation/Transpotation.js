import React from 'react';
import pic3 from '../../img/Hotel1/rocky-DBL.jpg';
import './Transpotation.scss';

const Transpotation = () => {
  return (
    <>
      <div className="container-xxl transpotation p-3 mx-auto mt-5">
        <h3 className="h3">地點和交通</h3>
        <div className="row">
          <div className="col-6 row">
            <ul className="list-unstyled spot-box mt-3 col-6">
              <li className="my-p d-flex my-2">
                <div class="material-symbols-outlined me-4">location_on</div>
                <p className="me-4">故宮博物院 : </p>
                <p>3公里</p>
              </li>
              <li className="my-p d-flex my-2">
                <div class="material-symbols-outlined me-4">location_on</div>
                <p className="me-4">故宮博物院 : </p>
                <p>3公里</p>
              </li>
              <li className="my-p d-flex my-2">
                <div class="material-symbols-outlined me-4">location_on</div>
                <p className="me-4">故宮博物院 : </p>
                <p>3公里</p>
              </li>
              <li className="my-p d-flex my-2">
                <div class="material-symbols-outlined me-4">location_on</div>
                <p className="me-4">故宮博物院 : </p>
                <p>3公里</p>
              </li>
            </ul>
            <ul className="list-unstyled spot-box mt-3 col-6">
              <li className="my-p d-flex my-2">
                <div class="material-symbols-outlined me-4">location_on</div>
                <p className="me-4">故宮博物院 : </p>
                <p>3公里</p>
              </li>
              <li className="my-p d-flex my-2">
                <div class="material-symbols-outlined me-4">location_on</div>
                <p className="me-4">故宮博物院 : </p>
                <p>3公里</p>
              </li>
              <li className="my-p d-flex my-2">
                <div class="material-symbols-outlined me-4">location_on</div>
                <p className="me-4">故宮博物院 : </p>
                <p>3公里</p>
              </li>
              <li className="my-p d-flex my-2">
                <div class="material-symbols-outlined me-4">location_on</div>
                <p className="me-4">故宮博物院 : </p>
                <p>3公里</p>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="big-map m-auto position-relative">
              <button className="position-absolute my-p">檢視地圖</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transpotation;
