import { Link } from "react-router-dom";
import "./styles.css";

function Footer({ myFunction }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email: Sarahsmithregine90@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Dorchester Avenue, Boston, MA 02124</p>
        </div>
        <div className="footer-content">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/find">Community Finding</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <h3>Follow US</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button onClick={myFunction} id="myBtn" title="Go to top">
        Back Up
      </button>
    </footer>
  );
}

export default Footer;
