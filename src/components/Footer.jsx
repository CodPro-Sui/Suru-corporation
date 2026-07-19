import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          Connecting Talent with the Right Opportunities.
        </p>

        <p>
          <strong>Address:</strong> Block Road, Sirsia, Giridih, Jharkhand,
          India
        </p>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Suru Corporation. All Rights Reserved.</span>
          <span>Developed by <strong>CodPro</strong></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;