import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ t }) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 pl-0">
      <div className="container">
        <NavLink className="navbar-brand text-primary font-weight-bold" to="/"> Trainer. </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about-us">About Us</NavLink>
              </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Our Services</NavLink>
              </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/news">News</NavLink>
            </li>
          </ul>
          <a className="btn btn-primary ml-auto hover-top-shadow" href="https://jss.sitecore.com/docs/getting-started/quick-start">
            {t('Documentation')}
          </a>
        </div>
      </div>
    </nav>
  );

  export default Header;
  