import React from 'react';
import logo from './logo.svg';
import cart from './cart.svg';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  let toLink = '';
  const linkList = ['旅遊行程', '票卷活動', '訂房住宿', '會員中心'];

  return (
    <div className="container-fluid">
      <div className="navbar d-flex align-items-center justify-content-around m-auto">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul className="navbar-btn list-unstyled d-flex justify-content-around align-items-center mx-2">
          {linkList.map((list, index) => {
            switch (list) {
              case '旅遊行程':
                toLink = '/travel';
                break;
              case '票卷活動':
                toLink = '/ticket';
                break;
              case '訂房住宿':
                toLink = '/';
                break;
              case '會員中心':
                toLink = '/profile';
                break;
              default:
                toLink = '/404';
                break;
            }
            return (
              <>
                <li className="mx-3" key={index}>
                  <Link className="h4 text-decoration-none" to={toLink}>
                    {list}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
        <div className="d-flex">
          <div>
            <button className="my-btn h4 mx-2">登出</button>
          </div>
          <div>
            <button className="my-btn h4 mx-2">註冊</button>
          </div>
          <div>
            <div>
              <button className="my-btn h4 cart mx-2">
                <span class="material-symbols-outlined">shopping_cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
