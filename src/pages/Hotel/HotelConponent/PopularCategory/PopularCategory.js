import React from 'react';
import './PopularCategory.scss';
import pic1 from '../../img/Hotel1/rocky-banner.jpg';

const PopularCategory = (props) => {

  return (
    <>
      <div className="popular-category container-xxl pt-5 pb-2">
        <h4 className="title my-heading ms-5 mb-3">-熱門分類</h4>
        <div className="d-flex justify-content-center">
          <button className="arrow-btn-box">
            <span className="material-symbols-outlined arrow-btn">
              arrow_back
            </span>
          </button>
          <div className="picture-list d-flex justify-content-center">
            <div>
              <img
                className="picture my-border-radius mx-2"
                src={pic1}
                alt="圖片1"
              />
              <p className="text-center">圖片1</p>
            </div>
            <div>
              <img
                className="picture my-border-radius mx-2"
                src={pic1}
                alt="圖片1"
              />
              <p className="text-center">圖片1</p>
            </div>
            <div>
              <img
                className="picture my-border-radius mx-2"
                src={pic1}
                alt="圖片1"
              />
              <p className="text-center">圖片1</p>
            </div>
            <div>
              <img
                className="picture my-border-radius mx-2"
                src={pic1}
                alt="圖片1"
              />
              <p className="text-center">圖片1</p>
            </div>
            <div>
              <img
                className="picture my-border-radius mx-2"
                src={pic1}
                alt="圖片1"
              />
              <p className="text-center">圖片1</p>
            </div>
            <div>
              <img
                className="picture my-border-radius mx-2"
                src={pic1}
                alt="圖片1"
              />
              <p className="text-center">圖片1</p>
            </div>
          </div>
          <button className="arrow-btn-box">
            <span class="material-symbols-outlined arrow-btn">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularCategory;
