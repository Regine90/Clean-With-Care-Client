import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={closeMenu}>
        <i className="fa-solid fa-hand-holding-heart"></i> CleanWithCare
      </Link>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/find" onClick={closeMenu}>
          Community Finding
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact Us
        </Link>
        <Link to="/login" onClick={closeMenu}>
          Login
        </Link>
        <Link to="/signup" onClick={closeMenu}>
          Sign Up
        </Link>
      </nav>

      <div className="icons">
        <Link to="/login" id="login-btn" onClick={closeMenu}>
          <i className="fa fa-user"></i>
        </Link>
        <i className="fa fa-bars" id="menu-btn" onClick={toggleMenu}></i>
      </div>

      <form className="search-form">
        <input type="search" id="search-box" placeholder="Search here..." />
        <label htmlFor="search-box" className="fa fa-search"></label>
      </form>
    </header>
  );
}

export default Header;
