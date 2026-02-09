import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav id="navigation" className="navbar navbar-expand-lg borderBottom p-4">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-center col-6">
            <a href="/" className="navbar-brand">
              <img
                src="/images/logo/StephenKingLogo.png"
                alt="Stephen King Logo"
                className="logoSize"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </a>
            <h1 className="letterSpacing ms-4">STEPHEN KING</h1>
          </div>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-dark"></span>
          </button>
          <div className="navbar-collapse collapse justify-content-around col-6" id="menu">
            <ul className="navbar-nav d-flex justify-content-around w-100">
              <li className="nav-item text-center">
                <a href="#about-author" className="nav-link text-white">
                  Autor
                </a>
              </li>
              <li className="nav-item text-center">
                <a href="#top-ten" className="nav-link text-white">
                  Top 10
                </a>
              </li>
              <li className="nav-item text-center">
                <a href="#books" className="nav-link text-white">
                  Libros
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;