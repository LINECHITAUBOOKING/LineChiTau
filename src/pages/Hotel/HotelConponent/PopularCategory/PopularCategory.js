import React from 'react';
import { useState } from 'react';
import './PopularCategory.scss';
import pic1 from '../../img/Hotel1/rocky-banner.jpg';
import pic2 from '../../img/Hotel1/rocky-DBL.jpg';

const PopularCategory = (props) => {
  let x = -987;
  let count = 0;
  const siglePiece = 141;

  const [pictureList, setPictureList] = useState([
    {
      order: 1,
      src: { pic1 },
    },
    {
      order: 2,
      src: { pic1 },
    },
    {
      order: 3,
      src: { pic1 },
    },
    {
      order: 4,
      src: { pic1 },
    },
    {
      order: 5,
      src: { pic1 },
    },
    {
      order: 6,
      src: { pic1 },
    },
    {
      order: 7,
      src: { pic1 },
    },
    {
      order: 8,
      src: { pic1 },
    },
  ]);

  const moveLeft = function () {
    const newPictureList = { ...pictureList };
    newPictureList.shift();
    newPictureList.push(pictureList[0]);
    setPictureList(newPictureList);
  };
  const moveRight = function () {};
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
          <div className="picture-list">
            <div className="picture-box d-flex justify-content-start ">
              {/* <div>
                <img
                  className="picture my-border-radius mx-2"
                  src={pic1}
                  alt="圖片1"
                />
                <p className="text-center">圖片1</p>
              </div> */}
              {pictureList.map((v, i) => {
                return (
                  <div key={v.order}>
                    <img
                      className="picture my-border-radius mx-2"
                      src={pic1}
                      alt={`圖片${v.order}`}
                    />
                    <p className="text-center">{`圖片${v.order}`}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="arrow-btn-box">
            <span className="material-symbols-outlined arrow-btn">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularCategory;
