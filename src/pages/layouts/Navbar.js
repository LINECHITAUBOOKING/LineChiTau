import React, { useContext } from 'react';
import logo from './logo.svg';
import cart from './cart.svg';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { JwtCsrfTokenContext } from '../../utils/csrf-hook/useJwtCsrfToken';
import axios from 'axios';

const Navbar = () => {
  const { init, jwtToken, logout } = useContext(JwtCsrfTokenContext);
  init(axios);
  let toLink = '';
  const linkList = ['旅遊行程', '票卷活動', '訂房住宿', '會員中心'];

  return (
    <div className="container-fluid">
      <div className="navbar d-flex align-items-center justify-content-around m-auto p-0">
        <div className="logo-box">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul className="navbar-btn list-unstyled d-flex justify-content-around align-items-center m-0">
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
                  <Link className="nav-foot text-decoration-none" to={toLink}>
                    {list}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
        <div className="d-flex">
          <div>
            <Link className="my-btn nav-foot-small mx-2" to={'/login'}>
              註冊
            </Link>
          </div>
          <div>
            {jwtToken ? (
              <Link
                className="my-btn nav-foot-small mx-2 "
                onClick={() => logout()}
                to={'/login'}
              >
                登出
              </Link>
            ) : (
              <Link className="my-btn nav-foot-small mx-2  " to={'/login1'}>
                登入
              </Link>
            )}
          </div>
          <div>
            <button className="my-btn nav-foot-small cart mx-2 pt-2 pb-1">
              <span class="material-symbols-outlined">shopping_cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
