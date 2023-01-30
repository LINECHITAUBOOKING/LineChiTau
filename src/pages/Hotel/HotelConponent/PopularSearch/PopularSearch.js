import React from 'react';
import './PopularSearch.scss';
import { Link } from 'react-router-dom';

const PopularSearch = () => {
  return (
    <>
      <div class="popular-search py-5 container-xxl">
        <h4 class="title my-heading d-flex justify-content-center">熱門搜尋</h4>
        <div class="tag my-4">
          <ul className="d-flex list-unstyled d-flex justify-content-center">
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                凱薩飯店
              </Link>
            </li>
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                威斯汀
              </Link>
            </li>
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                喜來登
              </Link>
            </li>
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                大板根
              </Link>
            </li>
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                W飯店
              </Link>
            </li>
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                寒舍愛美
              </Link>
            </li>
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                三井花園
              </Link>
            </li>
          </ul>
          <ul className="d-flex list-unstyled d-flex justify-content-center ps-5">
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                凱薩飯店
              </Link>
            </li>
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                威斯汀
              </Link>
            </li>
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                喜來登
              </Link>
            </li>
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                大板根
              </Link>
            </li>
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                W飯店
              </Link>
            </li>
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                寒舍愛美
              </Link>
            </li>
            <li className="">
              <Link
                to="/HotelDetail"
                className="search-tag my-border-radius nav-foot mx-3 px-2"
              >
                三井花園
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PopularSearch;
