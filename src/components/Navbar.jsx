import "./Navbar.css";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="/">
          <div className="logo-top">
            <img src="/IGNITE.png" alt="ignite_logo" />
            <h1>IGNITE DIGITALS</h1>
          </div>
        </a>
      </div>
      <div className="nav-contact-btn">
        <div className="nav-links">
          <ul>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#works">Portfolio</a>
            </li>
            <li>
              <a href="/#footer">Contact Details</a>
            </li>
          </ul>
        </div>
        <Link to="https://forms.gle/G7T94PEeJ1Vj6Mxg8">
        <button>Book a Demo</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
