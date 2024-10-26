import React from "react";
import logo1 from "./pics/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container text-center top'>
          <div className='img'>
            <img src={logo1} alt='Logo' className='footer-logo' />
          </div>
          <p>© 2024. All rights reserved by Yeshwanth.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
