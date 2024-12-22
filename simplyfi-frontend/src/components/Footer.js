import React from "react";
import "../styles/Footer.css";
import sponsorLogo from "../assets/logo0.png"; // Ensure you place the sponsor logo in src/assets
import trackLogo1 from "../assets/logo1.png"; // Ensure you place the first track logo in src/assets
import trackLogo2 from "../assets/logo2.png"; // Ensure you place the second track logo in src/assets

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logos">
          <img src={sponsorLogo} alt="Sponsor Logo" className="footer-logo" />
          <img src={trackLogo1} alt="Track 1 Logo" className="footer-logo" />
          <img src={trackLogo2} alt="Track 2 Logo" className="footer-logo" />
        </div>
        <div className="footer-details">
          <p>&copy; 2024 SimplyFi.Fun. All Rights Reserved.</p>
          <p>
            <strong>Contact Us:</strong> <br />
            Email: support@simplyfi.fun <br />
            Phone: +1 (123) 456-7890 <br />
            Twitter
          </p>
        </div>
        <ul className="footer-links">
          <li><a href="/faqs">FAQs</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
