import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_header.scss';
import logo from '../assets/img/Logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  return (
    <header>
      <div className="container">
        <Link id="logo" to="/" onClick={closeMenu}>
          <img src={logo} alt="Silicon logotype" loading="lazy" />
        </Link>

        <nav id="main-menu" className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
          <Link className="nav-link" to="/Appfeatures" onClick={closeMenu}>Features</Link>
          <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark Mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input 
              id="darkmode-switch" 
              type="checkbox" 
              checked={isDarkMode} 
              onChange={handleDarkModeToggle} 
            />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="auth-signin" href="#" className="btn-primary" aria-label="Sign in or sign up">
          <i className="fa-thin fa-user-large" aria-hidden="true"></i>
          <span>Sign in/up</span>
        </a>

        <button className="btn-mobile" aria-label="Toggle mobile menu" onClick={toggleMenu}>
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
        </button>
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
