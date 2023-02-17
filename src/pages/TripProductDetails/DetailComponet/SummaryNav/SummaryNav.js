import React from 'react';
import './SummaryNav.scss';

const SummaryNav = ({ listItems = ['客房', '地圖', '評論區', '注意事項'] }) => {
  //行程介紹', '地圖', '評論區

  return (
    <>
      <nav className="trip-summary-nav">
        <ul className="list-unstyled d-flex justify-content-around px-1 py-2 mb-0">
          <li>
            <a href="#intro" className="nav-a">
              行程介紹
            </a>
          </li>
          <li>
            <a href="#map" className="nav-a">
              地圖
            </a>
          </li>
          <li>
            <a href="#comment" className="nav-a">
              評論區
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SummaryNav;
