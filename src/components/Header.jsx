import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Jonno_Logo_Small_White.png';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand"> {/* Use Link component for the logo */}
          <img src={logo} alt="Logo" width="auto" height="30" className="d-inline-block align-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link> {/* Use Link component for navigation */}
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link> {/* Use Link component for navigation */}
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link> {/* Use Link component for navigation */}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
