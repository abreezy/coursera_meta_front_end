import React from 'react';
import './Footer.css';
import footerLogo from './img/Asset 18@4x.png'; // Adjust the image path as needed
import facebookLogo from './img/Facebook.png';  // Add these for social media logos
import twitterLogo from './img/twitter.png';
import instagramLogo from './img/Instagram.png';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Left side: Image */}
        <div className="footer-image">
          <img src={footerLogo} alt="Little Lemon logo" />
        </div>

        {/* Right side: Lists */}
        <div className="footer-lists">
          {/* Doormat Navigation */}
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#order">Order Online</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Address: 123 Main St.</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebookLogo} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitterLogo} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagramLogo} alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
