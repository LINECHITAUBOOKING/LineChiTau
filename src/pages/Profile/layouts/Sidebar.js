import React from 'react';
import './Sidebar.scss';
const svgpic = [
  'cupon', //0
  'index-pic', //1
  'line', //2
  'logout', //3
  'message', //4
  'mylove', //5
  'pay', //6
  'setting', //7
];

const svgpics = svgpic.map((item) => require('./images/' + item + '.svg'));
const Sidebatr = () => {
  return (
    <div className="sidebar">
      <div className="user-pic">
        <div className="pic" />
        <div className="name">Jerry</div>
      </div>

      <div className="side-point">
        <div className="side-point-item">
          <div className="overview microsoftjhenghei-regular-normal-old-copper-12px">
            point
          </div>
          <div className="overview-1 microsoftjhenghei-regular-normal-old-copper-12px">
            426
          </div>
        </div>
        <img className="line" src={svgpics[2]} alt="Line 2" />
        <div className="side-point-item">
          <div className="overview microsoftjhenghei-regular-normal-old-copper-12px">
            travel
          </div>
          <div className="overview-1 microsoftjhenghei-regular-normal-old-copper-12px">
            426
          </div>
        </div>
        <img className="line" src={svgpics[2]} alt="Line 3" />
        <div className="side-point-item">
          <div className="overview microsoftjhenghei-regular-normal-old-copper-12px">
            trip
          </div>
          <div className="overview-1 microsoftjhenghei-regular-normal-old-copper-12px">
            426
          </div>
        </div>
      </div>

      <div className="side-bar-item">
        <div className="side-container">
          <div className="sidebar-item">
            <div className="item-container">
              <img className="item-pic" src={svgpics[1]} alt="item-pic" />
              <div className="item-text microsoftjhenghei-bold-old-copper-14px">
                訂單
              </div>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="item-container">
              <img className="item-pic" src={svgpics[0]} alt="item-pic" />
              <div className="item-text microsoftjhenghei-bold-old-copper-14px">
                訂單
              </div>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="item-container">
              <img className="item-pic" src={svgpics[4]} alt="item-pic" />
              <div className="item-text microsoftjhenghei-bold-old-copper-14px">
                訂單
              </div>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="item-container">
              <img className="item-pic" src={svgpics[6]} alt="item-pic" />
              <div className="item-text microsoftjhenghei-bold-old-copper-14px">
                訂單
              </div>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="item-container">
              <img className="item-pic" src={svgpics[7]} alt="item-pic" />
              <div className="item-text microsoftjhenghei-bold-old-copper-14px">
                訂單
              </div>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="item-container">
              <img className="item-pic" src={svgpics[3]} alt="item-pic" />
              <div className="item-text microsoftjhenghei-bold-old-copper-14px">
                訂單
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebatr;
