import React from 'react';
import './Footer.css';
import scrollTo from '../../utils/scrollTo';
import logo from '../../assets/logo.png';

const LINKS = ['home', 'about', 'services', 'projects', 'contact'];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <img src={logo} alt="Skyline Architecture" className="footer__logo-img" />
          <p className="footer__tagline">Designing spaces that inspire.</p>
        </div>
        <div className="footer__links">
          {LINKS.map(item => (
            <a
              key={item}
              href={'#' + item}
              onClick={(e) => { e.preventDefault(); scrollTo(item); }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Skyline Architecture. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;