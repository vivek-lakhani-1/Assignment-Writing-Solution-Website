import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Footer/logo.svg";
import hamburger from "../../assets/Navbar/hamburger.png";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 
  return (
    <div>
      <nav className="navbar sticky-top  navbar-expand-lg py-2">
        <div className="container-fluid px-lg-5 px-sm-2 mobile-size">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="assignmentcure-logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={hamburger} alt="ham" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbarLink mb-2 mb-lg-0 gap-lg-3 gap-sm-1">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                    <Link className="dropdown-item" to="/assignment-writing-service">
                      Assignment Writing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/essay-writing-service">
                      Essay Writing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/dissertation-writing-service">
                      Dessertation Writing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/case-study-writing">
                      Case Study Writing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/coursework-help-online">
                    Coursework Writing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/programming-assignment-help">
                      Programming Assignment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/research-paper-writing-service">
                      Research Paper Writing
                    </Link>
                  </li>
                  
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  BLOGS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/writers">
                  WRITERS
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/tools">
                  WRITING TOOLS
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABOUT
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/about">
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {windowWidth <= 500 ? (
              <div className="mobile-buttons">
                <Link to="/quote">
                  <button type="button" className="hire-btn btn">
                    Get A Quote
                  </button>
                </Link>
                <button type="button" className="btn login-btn">
                  LOGIN
                </button>
              </div>
            ) : (
              <>
                <Link to="/quote">
                  <a className="hire-btn btn">
                    Get A Quote
                  </a>
                </Link>
                <a className="btn login-btn">
                  LOGIN
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
