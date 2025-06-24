import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <i className="fa-solid fa-hand-holding-heart"></i> CleanWithCare
      </Link>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/find">Community Finding</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>

      <div className="icons">
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
