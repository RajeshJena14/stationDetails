import React from 'react';
import './Header.css';
import logo from '../assets/Rail_logo.png';
import profileIcon from '../assets/Profile_img.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Railway Logo" className="railway-logo" />
      <div className="title-container">
        <h2 className="hindi-title">पूर्व तट रेलवे</h2>
        <p className="english-title">EAST COAST RAILWAY</p>
      </div>
      <img src={profileIcon} alt="Profile" className="profile-icon" />
    </header>
  );
}

export default Header;
