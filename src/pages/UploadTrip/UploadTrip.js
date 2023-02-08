import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UploadTrip() {
  const [tripEmail, setTripEmail] = useState();
  const [tripName, setTripName] = useState();
  const [tripStartDate, setTripStartDate] = useState();
  const [tripEndDate, setTripEndDate] = useState();
  const [tripAddress, setTripAddress] = useState();
  const [tripGeoLocationX, setTripGeoLocationX] = useState();
  const [tripGeoLocationY, setTripGeoLocationY] = useState();
  const [tripArea, setTripArea] = useState();
  const [tripRegion, setTripRegion] = useState();
  const [tripIntroduction, setTripIntroduction] = useState();
  const [tripImgForIntro, setTripImgForIntro] = useState();
  const [tripIntroForImg, setTripIntroForImg] = useState();
  const [tripPicture, setTripPicture] = useState();
  const [tripCommentGrade, setTripCommentGrade] = useState();
  const [tripCommentAmount, setTripCommentAmount] = useState();

  function setEmail(e) {
    setTripEmail(e.target.value);
  }

  function setName(e) {
    setTripName(e.target.value);
  }

  function setStartDate(e) {
    setTripStartDate(e.target.value);
  }

  function setEndDate(e) {
    setTripEndDate(e.target.value);
  }

  function setAddress(e) {
    setTripAddress(e.target.value);
  }

  function setGeoLocationX(e) {
    setTripGeoLocationX(e.target.value);
  }
  function setGeoLocationY(e) {
    setTripGeoLocationY(e.target.value);
  }

  function setArea(e) {
    setTripArea(e.target.value);
  }

  function setRegion(e) {
    setTripRegion(e.target.value);
  }

  function setIntroduction(e) {
    setTripIntroduction(e.target.value);
  }

  function setImgForIntro(e) {
    setTripImgForIntro(e.target.value);
  }

  function setIntroForImg(e) {
    setTripIntroForImg(e.target.value);
  }
  function setPicture(e) {
    setTripPicture(e.target.value);
  }
  function setCommentGrade(e) {
    setTripCommentGrade(e.target.value);
  }
  function setCommentAmount(e) {
    setTripCommentAmount(e.target.value);
  }

  //! debounce
  function debounce(callback, wait) {
    let timeout;
    return (...args) => {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => callback.apply(context, args), wait);
    };
  }

  let TripData = '100';

  async function submitTrip() {
    let response = await axios.post(
      'http://localhost:3000/api/uploadTrip/test',
      {
        TripData,
      }
    );
    console.log('已送出並收到', JSON.stringify(response));
  }

  async function submitPlan() {
    let response = await axios.post('http://localhost:3000/api/uploadPlan');
    console.log('已送出並收回', JSON.stringify(response));
  }
  useEffect(() => {
    console.log('tripEmail:', tripEmail);

    // console.log('tripName:', tripName);
    // console.log('tripStartDate:', tripStartDate);
    // console.log('tripEndDate:', tripEndDate);
    // console.log('tripAddress:', tripAddress);
    // console.log('tripGeoLocationX:', tripGeoLocationX);
    // console.log('tripGeoLocationY:', tripGeoLocationY);
    // console.log('tripArea:', tripArea);
    // console.log('tripRegion:', tripRegion);
    // console.log('tripIntroduction:', tripIntroduction);
    // console.log('tripImgForIntro:', tripImgForIntro);
    // console.log('tripIntroForImg:', tripIntroForImg);
    // console.log('tripPicture:', tripPicture);
    // console.log('tripCommentGrade:', tripCommentGrade);
    // console.log('tripCommentAmount:', tripCommentAmount);
  });

  return (
    <>
      <form id="trip-from">
        <label>
          創建者EMAIL{' '}
          <input type="text" name="email" onChange={debounce(setEmail, 1000)} />
        </label>
        <hr />
        <label>
          創立行程名字{' '}
          <input
            type="text"
            name="tripName"
            onChange={debounce(setName, 1000)}
          />
        </label>
        <hr />
        <label>
          預計販賣日期
          <input
            type="text"
            name="startDate"
            onChange={debounce(setStartDate, 1000)}
          />
        </label>
        <hr />
        <label>
          預計停賣日期
          <input
            type="text"
            name="endDate"
            onChange={debounce(setEndDate, 1000)}
          />
        </label>
        <hr />
        <label>
          行程集合地點或重要景點名稱(限一)
          <input
            type="text"
            name="address"
            onChange={debounce(setAddress, 1000)}
          />
        </label>
        <hr />
        <label>
          上述地點經度(全球通用座標)
          <input
            type="text"
            name="geoLocationX"
            onChange={debounce(setGeoLocationX, 1000)}
          />
        </label>
        <label>
          上述地點緯度(全球通用座標)
          <input
            type="text"
            name="geoLocationY"
            onChange={debounce(setGeoLocationY, 1000)}
          />
        </label>
        <hr />
        <label>
          行程主要所屬台灣區域
          <input type="text" name="area" onChange={debounce(setArea, 1000)} />
        </label>
        <hr />
        <label>
          行程主要所屬地點
          <input
            type="text"
            name="region"
            onChange={debounce(setRegion, 1000)}
          />
        </label>
        <hr />
        <label>
          行程介紹
          <input
            type="text"
            name="introduction"
            onChange={debounce(setIntroduction, 1000)}
          />
        </label>
        <hr />
        <label>
          行程介紹附加圖片1
          <input
            type="text"
            name="image1"
            onChange={debounce(setImgForIntro, 1000)}
          />
        </label>
        {/* <label>
          行程介紹附加圖片2 <input type="text" name="image2" onChange={}/>
        </label>
        <label>
          行程介紹附加圖片3 <input type="text" name="image3" onChange={}/>
        </label> */}
        <hr />
        <label>
          附加圖片介紹1
          <input
            type="text"
            name="imageIntro1"
            onChange={debounce(setIntroForImg, 1000)}
          />
        </label>
        {/* <label>
          附加圖片介紹2 <input type="text" name="imageIntro2" onChange={}/>
        </label>
        <label>
          附加圖片介紹3 <input type="text" name="imageIntro3" onChange={}/>
        </label> */}
        <hr />
        <label>
          評價等級(公式為grade/amount)
          <input
            type="text"
            name="commentGrade"
            onChange={debounce(setCommentGrade, 1000)}
          />
        </label>
        <hr />
        <label>
          評價過的數量
          <input
            type="text"
            name="commentAmount"
            onChange={debounce(setCommentAmount, 1000)}
          />
        </label>
        <button type="button" form="trip-form" onClick={submitTrip}>
          點擊送出
        </button>
      </form>
    </>
  );
}
