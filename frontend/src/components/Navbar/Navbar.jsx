import React, { useState, useEffect } from 'react';
import './Navbar.css';
import scrollTo from '../../utils/scrollTo';
import logo from '../../assets/logo.png';

const NAV_ITEMS = ['home', 'about', 'services', 'projects', 'contact'];

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_ITEMS.map(id => document.getElementById(id)).filter(Boolean);
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 130) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  let navClass = 'navbar';
  if (scrolled) navClass = 'navbar navbar--scrolled';

  let linksClass = 'navbar__links';
  if (menuOpen) linksClass = 'navbar__links navbar__links--open';

  let hamburgerClass = 'navbar__hamburger';
  if (menuOpen) hamburgerClass = 'navbar__hamburger open';

  return (
    <nav className={navClass}>
      <div className="navbar__logo">
        <img src={logo} alt="Skyline Architecture" className="navbar__logo-img" />
      </div>
      <ul className={linksClass}>
        {NAV_ITEMS.map(item => (
          <li key={item}>
            <a
              href={'#' + item}
              className={activeSection === item ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick(item); }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={hamburgerClass}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;