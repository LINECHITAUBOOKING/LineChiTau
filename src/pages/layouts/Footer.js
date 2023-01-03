import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './Footer.scss';
const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <img className="pic" src={logo} alt="logo" />
        </div>
        <div className="footer-item">
          <div className="sub-title">
            <div className="sub-title-item my-p">Home</div>
            <div className="sub-title-item my-p">Tours</div>
            <div className="sub-title-item my-p">Category</div>
            <div className="sub-title-item my-p">About Us</div>
          </div>
          <div className="title h5">Menu</div>
        </div>

        <div className="footer-item">
          <div className="title h5">Booking Plan</div>
          <div className="sub-title">
            <div className="sub-title-item my-p">Personal Trip</div>
            <div className="sub-title-item my-p">Group Trip</div>
          </div>
        </div>

        <div className="footer-item">
          <div className="title h5">Support</div>
          <div className="sub-title">
            <div className="sub-title-item my-p">FAQ</div>
            <div className="sub-title-item my-p">Terms &amp; Conditions</div>
            <div className="sub-title-item my-p">Privacy Policy</div>
          </div>
        </div>
        <div className="footer-item">
          <div className="title h5">Get App</div>
          <div className="sub-title">
            <div className="sub-title-item my-p">Google Play Store</div>
            <div className="sub-title-item my-p">App Store</div>
            <div className="sub-title-item my-p">Other Stores</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
