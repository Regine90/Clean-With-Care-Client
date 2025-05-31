import React from "react";
import "../shared/styles.css";

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fa-solid fa-hand-holding-heart"></i> CleanWithCare
      </a>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Community Finding</a>
        <a href="#">Contact Us</a>
      </nav>

      <div className="icons">
        <i className="fa fa-search" id="search-btn"></i>
        <i className="fa fa-user" id="login-btn"></i>
        <i className="fa fa-bars" id="menu-btn"></i>
      </div>

      <form className="search-form">
        <input type="search" id="search-box" placeholder="Search here..." />
        <label htmlFor="search-box" className="fa fa-search"></label>
      </form>
    </header>
  );
}

export default Header;
