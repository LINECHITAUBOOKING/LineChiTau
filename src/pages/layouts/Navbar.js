import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
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
    <div className="navbar">
      <div className="logo-2">
        <div className="logo-3">
          <div className="logo-container-logo">
            <img className="logo-4" src={logo} alt="logo" />
            {/* <div className="logo-1">
              <h1 className="text valign-text-middle notosans-bold-old-copper-40px">
                來七桃
              </h1>
              <div className="play-in-taiwan valign-text-middle notosans-bold-old-copper-24px">
                PlayInTaiwan
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="navbar-btn">
        <p className="text-2 valign-text-middle notosans-semi-bold-old-copper-24px">
          <Link to="/ticket">旅遊行程</Link>
          <Link to="/travel">票卷活動</Link>
          <Link to="/">訂房住宿</Link>
          <Link to="/profile">會員中心</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
      </div>
      <div className="signbtn">
        <div className="signbtn-item">
          <div className="login">
            <div className="overlap-group">
              <div className="rectangle-73-2" />
              <div className="text-1 valign-text-middle notosans-semi-bold-old-copper-24px">
                登出
              </div>
            </div>
          </div>
        </div>
        <div className="signbtn-item">
          <div className="login">
            <div className="overlap-group">
              <div className="rectangle-73-2" />
              <div className="text-1 valign-text-middle notosans-semi-bold-old-copper-24px">
                註冊
              </div>
            </div>
          </div>
        </div>
        <div className="cart-signbtn">
          <div className="cart-cart">
            <img className="vector" src="vector-1.svg" alt="Vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
