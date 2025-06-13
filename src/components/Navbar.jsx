import "./Navbar.css";

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
        <div className="logo-bottom">
          <h3>Web Development and Social Media Management</h3>
        </div>
      </div>
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
      <div className="nav-contact-btn">
        <button>Book a Demo</button>
      </div>
    </div>
  );
}

export default Navbar;
