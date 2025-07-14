import React from "react";
import "./Footer.css";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="footer-a1">
          <Link to="/">
            <div className="logo-bottom">
              <img src="/IGNITE.png" alt="Ignite Digitals Logo" />
              <div className="logo-text">
                <h1>IGNITE DIGITALS</h1>
                <div className="company-description">
                  Web Development & Software Company
                </div>
              </div>
            </div>
          </Link>
          <div className="footer-addresses">
            <div className="address india">
              <h3>India</h3>
              <p>Lovely Professional University</p>
              <p>Phagwara, Punjab - 144411</p>
              <a href="tel:+919580677477" className="phone-link">
                +91 9580677477
              </a>
              <a href="tel:+919727124036" className="phone-link">
                +91 9727124036
              </a>
            </div>
          </div>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com/people/Ignite-Digitals/100095149449938/"
            className="social-icon facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/company/ignite-digitals-id/?viewAsMember=true"
            className="social-icon linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/ignite_digital_media1/"
            className="social-icon instagram"
          >
            <CiInstagram />
          </a>
          <a href="tel:+919727124036" className="social-icon whatsapp">
            <FaWhatsappSquare />
          </a>
        </div>
        <div className="footer-copyright">
          <p>
            © Ignite Digitals | All Rights Reserved {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
