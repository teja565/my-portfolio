import React from "react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/krishna-teja-8bb51b20b/"
            className="footer__social-link"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/teja565" className="footer__social-link">
            <FaGithub />
          </a>
          <a href="https://wa.me/+919701033203" className="footer__social-link">
            <FaWhatsapp />
          </a>
        </div>
        <p className="footer__copyright text-cs">
          &copy; <span>2024</span> All Rights Reserved.
        </p>
        <p className="footer__copyright text-cs">
          Developed by <span>Krishna Teja</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
