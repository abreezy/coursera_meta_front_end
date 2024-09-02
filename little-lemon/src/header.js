import React from 'react';
import './Header.css';
import headerLogo from './img/header_logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={headerLogo} alt="Little Lemon logo" />
      </div>
    </header>
  );
}

export default Header;
