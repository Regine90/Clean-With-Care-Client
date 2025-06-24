import { Link } from "react-router-dom";
import "../shared/styles.css";

function Header() {
  return (
    <header className="header-container">
      <div className="icons">
        <Link to="/login" id="login-btn">
          <i className="fa fa-user"></i>
        </Link>

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
