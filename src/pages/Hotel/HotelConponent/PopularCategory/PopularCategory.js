import React from 'react';
import { useState, useEffect } from 'react';
import './PopularCategory.scss';
import { Link } from 'react-router-dom';
import pic1 from '../../img/Hotel1/rocky-banner.jpg';
import pic2 from '../../img/Hotel1/rocky-DBL.jpg';
import axios from 'axios';

const PopularCategory = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState({});
  const getCategory = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/TANGEJ0411/fakeDB/main/db.json/category'
    );
    // console.log(response.data);
    setCategory(response.data);
  };
  useEffect(() => {
    setIsLoading(true);
    getCategory();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const { category: categoryList = [], picture } = { ...category };

  const moveLeft = function () {
    const newCategory = { ...category };
    const { category: newCtegoryList = [], picture } = { ...newCategory };
    newCtegoryList.push(category.category[0]);
    newCtegoryList.shift();
    console.log(newCtegoryList);

    // console.log(newCategory);
    setCategory(newCategory);
  };

  const moveRight = function () {
    const newCategory = { ...category };
    const { category: newCtegoryList = [], picture } = { ...newCategory };
    newCtegoryList.unshift(categoryList[category.category.length - 1]);
    newCtegoryList.pop();

    // console.log(newPictureList)
    setCategory(newCategory);
  };

  const spinner = (
    <>
      <div className="spinner-border m-5 my-p" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-border m-5 my-p" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-border m-5 my-p" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-border m-5 my-p" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-border m-5 my-p" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-border m-5 my-p" role="status">
        <span className="sr-only"></span>
      </div>
    </>
  );
  const display = (
    <ul className="d-flex justify-content-start list-unstyled">
      {categoryList.map((v, i) => {
        return (
          <li key={i}>
            <Link to="/Hotellist" className="text-unstyled">
              <img
                className="picture my-border-radius mx-2"
                src={pic1}
                alt={v}
              />
              <p className="text-center my-p">{v}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <div className="popular-category container-xxl pt-5 pb-2">
        <h4 className="title my-heading ms-5 mb-3">-熱門分類</h4>
        <div className="d-flex justify-content-center">
          <button className="arrow-btn-box" onClick={moveLeft}>
            <span className="material-symbols-outlined arrow-btn">
              arrow_back
            </span>
          </button>
          <div className="picture-list">
            <div className="picture-box d-flex justify-content-start">
              {/* <div>
                <img
                  className="picture my-border-radius mx-2"
                  src={pic1}
                  alt="圖片1"
                />
                <p className="text-center">圖片1</p>
              </div> */}
              {isLoading ? spinner : display}
            </div>
          </div>
          <button className="arrow-btn-box" onClick={moveRight}>
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
