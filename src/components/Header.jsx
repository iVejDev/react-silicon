import React from 'react';
import '../styles/_header.scss';
import logo from '../assets/img/Logo.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <a id="logo" href="/">
          <img src={logo} alt="Silicon logotype" loading="lazy" />
        </a>

        <nav id="main-menu" className="navbar">
          <a className="nav-link" href="#features">Features</a>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark Mode</span>
          <label for="darkmode-switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="auth-signin" href="#" className="btn-primary" aria-label="Sign in or sign up">
          <i className="fa-thin fa-user-large" aria-hidden="true"></i>
          <span>Sign in/up</span>
        </a>

        <button className="btn-mobile" aria-label="Toggle mobile menu">
          <i className="fa-regular fa-bars" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
