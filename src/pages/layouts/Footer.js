import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './Footer.scss';
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img className="pic" src={logo} alt="logo" />
      </div>
      <div className="footer-item">
        <div className="sub-title">
          <div className="sub-title-item microsoftjhenghei-bold-old-copper-16px">
            Home
          </div>
          <div className="sub-title-item microsoftjhenghei-bold-old-copper-16px">
            Tours
          </div>
          <div className="sub-title-item microsoftjhenghei-bold-old-copper-16px">
            Category
          </div>
          <div className="sub-title-item microsoftjhenghei-bold-old-copper-16px">
            About Us
          </div>
        </div>
        <div className="title microsoftjhenghei-bold-old-copper-20px">Menu</div>
      </div>

      <div className="footer-item">
        <div className="title microsoftjhenghei-bold-old-copper-20px">
          Booking Plan
        </div>
        <div className="sub-title">
          <div className="sub-title-item microsoftjhenghei-bold-old-copper-16px">
            Personal Trip
          </div>
          <div className="sub-title-item microsoftjhenghei-bold-old-copper-16px">
            Group Trip
          </div>
        </div>
      </div>

      <div className="footer-item">
        <div className="title microsoftjhenghei-bold-old-copper-20px">
          Support
        </div>
        <div className="sub-title">
          <div className="sub-title-item microsoftjhenghei-bold-old-copper-16px">FAQ</div>
          <div className="sub-title-item microsoftjhenghei-bold-old-copper-16px">
            Terms &amp; Conditions
          </div>
          <div className="sub-title-item microsoftjhenghei-bold-old-copper-16px">
            Privacy Policy
          </div>
        </div>
      </div>
      <div className="footer-item">
        <div className="title microsoftjhenghei-bold-old-copper-20px">
          Get App
        </div>
        <div className="sub-title">
          <div className="sub-title-item microsoftjhenghei-bold-old-copper-16px">
            Google Play Store
          </div>
          <div className="sub-title-item microsoftjhenghei-bold-old-copper-16px">
            App Store
          </div>
          <div className="sub-title-item microsoftjhenghei-bold-old-copper-16px">
            Other Stores
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
