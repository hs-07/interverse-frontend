import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo flex">
        <img src="/inter-logo.svg" alt="" className="" />
      </div>
      <button
        className={`navbar-toggle ${isSideNavOpen ? "open" : ""}`}
        onClick={toggleSideNav}
      >
        <span className="navbar-toggle-icon"></span>
      </button>
      <ul className={`navbar-nav ${isSideNavOpen ? "open" : ""}`}>
        <li className="nav-item">
          <NavLink
            exact
            to="/"
            className="nav-link"
            activeClassName="active"
            onClick={toggleSideNav}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className="nav-link"
            activeClassName="active"
            onClick={toggleSideNav}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName="active"
            onClick={toggleSideNav}
          >
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            className="signup-btn"
            // activeClassName="active"
            onClick={toggleSideNav}
          >
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
