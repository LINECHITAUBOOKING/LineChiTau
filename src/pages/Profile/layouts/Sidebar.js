import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import { Toast } from 'react-toastify/dist/components';
import 'react-toastify/dist/ReactToastify.css';
import line from './images/line.svg';
import mask from './images/mask.png';
import './Sidebar.scss';
const svgpic = [
  'index-pic', //0
  'cupon', //1
  'mylove', //2
  'message', //3
  'pay', //4
  'setting', //5
  'logout', //6
];

const svgpics = svgpic.map((item) => require('./images/' + item + '.svg'));

let toLink = '';
const linkList = [
  '訂單',
  '我的優惠券',
  '我的最愛',
  '訊息',
  '支付',
  '設定',
  '登出',
];
// const notify = () => toast('Wow so easy!');
const Sidebatr = () => {
  return (
    <div className="sidebar">
      {/* 用戶照片 姓名 */}
      <div className="user-pic">
        <img className="pic" src={mask} alt="" />
        <div className="name">Jerry</div>
      </div>
      {/*用戶點數 */}
      <div className="side-point">
        <div className="side-point-item">
          <div className="overview microsoftjhenghei-regular-normal-old-copper-12px">
            point
          </div>
          <div className="overview-1 microsoftjhenghei-regular-normal-old-copper-12px">
            426
          </div>
        </div>
        <img className="line" src={line} alt="Line 2" />
        <div className="side-point-item">
          <div className="overview microsoftjhenghei-regular-normal-old-copper-12px">
            travel
          </div>
          <div className="overview-1 microsoftjhenghei-regular-normal-old-copper-12px">
            426
          </div>
        </div>
        <img className="line" src={line} alt="Line 3" />
        <div className="side-point-item">
          <div className="overview microsoftjhenghei-regular-normal-old-copper-12px">
            trip
          </div>
          <div className="overview-1 microsoftjhenghei-regular-normal-old-copper-12px">
            426
          </div>
        </div>
      </div>
      {/* sidebar-btn */}
      <div className="side-bar-item">
        <div className="side-container">
          {linkList.map((list, index) => {
            switch (list) {
              case '訂單':
                toLink = '/profile';
                break;
              case '我的優惠券':
                toLink = '/profile/coupon';
                break;
              case '我的最愛':
                toLink = '/profile/mylove';
                break;
              case '訊息':
                toLink = '/profile/message';
                break;
              case '支付':
                toLink = '/profile/pay';
                break;
              case '設定':
                toLink = '/profile/setting';
                break;
              case '登出':
                toLink = '/';
                break;
              default:
                toLink = '/404';
                break;
            }
            return (
              <>
                <Link to={toLink}>
                  <div className="sidebar-item">
                    <div
                      className="item-container"
                      onClick={() => {
                        console.log(list);
                        toast(list);
                      }}
                    >
                      <img
                        className="item-pic"
                        src={svgpics[index]}
                        alt="item-pic"
                      />
                      <div className="item-text microsoftjhenghei-bold-old-copper-14px text-decoration-none">
                        {linkList[index]}
                      </div>
                      <ToastContainer limit={1} autoClose={1000} />
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebatr;
