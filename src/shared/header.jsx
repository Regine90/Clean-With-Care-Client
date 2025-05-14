function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fa-solid fa-hand-holding-heart"> </i>CleanWithCare
      </a>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Community Finding</a>
        <a href="#">Contact Us</a>
      </nav>

      <div className="icons">
        <div className="fa fa-search" id="search-btn"></div>
        <div className="fa fa-user" id="login-btn"></div>
        <div className="fa fa-bars" id="menu-btn"></div>
      </div>

      <form className="search-form">
        <input type="search" id="search-box" placeholder="Search Here...." />
        <label htmlFor="search-box" className="fa fa-search"></label>
      </form>
    </header>
  );
}


export default Header;