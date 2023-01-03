import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './Footer.scss';
const Footer = () => {
  return (
    <div className="container-fluid">
      <footer className="footer">
        <div className="logo">
          <img className="pic" src={logo} alt="logo" />
        </div>
        <div className="row align-items-start">
          <div>
            <div className="h5">Menu</div>
            <div className="my-p">Home</div>
            <div className="my-p">Tours</div>
            <div className="my-p">Category</div>
            <div className="my-p">About Us</div>
          </div>
        </div>

        <div className="footer-item">
          <div className="h5">Booking Plan</div>
          <div>
            <div className="my-p">Personal Trip</div>
            <div className="my-p">Group Trip</div>
          </div>
        </div>

        <div className="footer-item">
          <div className="h5">Support</div>
          <div>
            <div className="my-p">FAQ</div>
            <div className="my-p">Terms &amp; Conditions</div>
            <div className="my-p">Privacy Policy</div>
          </div>
        </div>
        <div className="footer-item">
          <div className="h5">Get App</div>
          <div>
            <div className="my-p">Google Play Store</div>
            <div className="my-p">App Store</div>
            <div className="my-p">Other Stores</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
