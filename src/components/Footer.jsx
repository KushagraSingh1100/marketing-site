import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logo.png" alt="" />
            <div className="logo-text">Ignite digital</div>
            <div className="company-description">
              Web Development & Software Company
            </div>
          </div>
        </div>

        <div className="footer-addresses">
          <div className="address india">
            <h3>India</h3>
            <p>SCO-4, 1st Floor, Omaxe Royal</p>
            <p>Residency, Ludhiana, 142022</p>
            <a href="tel:+919814520845" className="phone-link">
              +91 9814520845
            </a>
            <a href="https://maps.google.com" className="map-link">
              View on Google Maps
            </a>
          </div>

          <div className="address usa">
            <h3>USA</h3>
            <p>513 Ranch Trl, Irving, TX 75063</p>
            <a href="tel:+1(929)393-0969" className="phone-link">
              +1 (929) 393-0969
            </a>
            <p>48870 Eagle View Terrace, Fremont</p>
            <p>CA 94539</p>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>Sign up to our newsletter</h3>
          <form className="newsletter-form">
            <input type="text" placeholder="Name" className="form-input" />
            <input
              type="email"
              placeholder="Email Address"
              className="form-input"
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>
          <p className="privacy-notice">
            Digital Kangaroos needs this information you give to contact you
            about our products and services. You may unsubscribe at any time.
            For more information please review our{" "}
            <a href="/privacy-policy" className="policy-link">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="#" className="social-icon facebook">
            f
          </a>
          <a href="#" className="social-icon linkedin">
            in
          </a>
          <a href="#" className="social-icon instagram">
            ig
          </a>
          <a href="#" className="social-icon whatsapp">
            w
          </a>
          <a href="#" className="social-icon youtube">
            yt
          </a>
        </div>

        <nav className="footer-nav">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/work">Work</a>
          <a href="/press-releases">Press releases</a>
          <a href="/blogs">Blogs</a>
          <a href="/faqs">FAQs</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy policy</a>
          <a href="/terms">Terms & conditions</a>
        </nav>

        <div className="footer-copyright">
          <p>© Digital Kangaroos | All Rights Reserved 2023</p>
          <div className="footer-links">
            <a href="/dk-company-projects">DK Company Projects</a>
            <a href="/cart-potato">Cart Potato</a>
            <a href="/dk-school">DK School</a>
          </div>
        </div>
      </div>
      {/* <div className="contact-us-button">CONTACT US</div> */}
    </footer>
  );
};

export default Footer;
