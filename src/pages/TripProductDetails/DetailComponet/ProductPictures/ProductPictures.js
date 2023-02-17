import React from 'react';
import './ProductPictures.scss';
import pic3 from './cute-cat.png';

export default function ProductPictures({allPicArr}) {

  console.log(`prop傳入ProductPictures:`,allPicArr)
    // const allPicArr = allPic.split(`,`);
    // console.log(`arr:`,allPicArr,`length:`,allPicArr.length)
  return (
    <>
    <div className="row mt-4">
    <div className="col-8 left-side">
    <div className="main-pic-box">
    <img src={allPicArr?`/images/${allPicArr[0]}`:pic3} className="main-pic" alt="main" />
    </div>
    </div>
    <div className="col-4 d-flex flex-column justify-content-between">
    <div className="vice-pic-box">
    <img src={allPicArr?`/images/${allPicArr[1]}`:pic3} className="vice-pic" alt="vice" />
    </div>
    <div className="vice-pic-box">
    <img src={allPicArr?`/images/${allPicArr[2]}`:pic3} className="vice-pic" alt="vice" />
    </div>
    </div>
    </div>
    </>
    );
}
  


