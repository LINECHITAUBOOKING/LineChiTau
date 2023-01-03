import React from 'react';
import logo from './logo.svg';
import cart from './cart.svg';
import { Link } from 'react-router-dom';
import './Navbar.scss';
/* const svgpic = [
  'cupon', //0
  'dot-h', //1
  'dot', //2
  'index', //3
  'line', //4
  'location', //5
  'logo', //6
  'logout', //7
  'message', //8
  'mylove', //9
  'pay', //10
  'setting', //11
];

const svgpics = svgpic.map((item) => require('../../images/' + item + '.svg'));

const pngpic = ['facebook', 'instagram', 'mask', 'pic1', 'pic2', 'telegram'];
const pngpics = pngpic.map((item) => require('../../images/' + item + '.png')); */
const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="navbar">
        <div className="logo-2">
          <div className="logo-3">
            <div className="logo-container-logo">
              <img className="logo-4" src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="navbar-btn">
          <p className="text-2 valign-text-middle notosans-semi-bold-old-copper-24px">
            <Link to="/ticket">旅遊行程</Link>
            <Link to="/travel">票卷活動</Link>
            <Link to="/">訂房住宿</Link>
            <Link to="/profile">會員中心</Link>
          </p>
        </div>
        <div className="signbtn">
          <div className="signbtn-item">
            <div className="login">
              <div className="overlap-group">
                {/* <div className="rectangle-73-2" /> */}
                {/* <div className="text-1 valign-text-middle notosans-semi-bold-old-copper-24px">
                  登出
                </div> */}
                <button className="my-btn h4">登出</button>
              </div>
            </div>
          </div>
          <div className="signbtn-item">
            <div className="login">
              <div className="overlap-group">
                {/*  <div className="rectangle-73-2" />
                <div className="text-1 valign-text-middle notosans-semi-bold-old-copper-24px">
                  註冊
                </div> */}
                <button className="my-btn h4">註冊</button>
              </div>
            </div>
          </div>
          <div className="signbtn-item">
            <div className="login">
              <div className="overlap-group">
                <button className="my-btn h4 cart">
                  <span class="material-symbols-outlined">shopping_cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
