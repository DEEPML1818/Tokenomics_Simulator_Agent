import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png"; // Ensure you place your logo file in the "src/assets" directory

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <img src={logo} alt="SimplyFi Logo" className="logo" />
          <h1>SimplyFi.Fun</h1>
        </div>
        <nav className="header-nav">
        </nav>
        <div className="header-wallet">
          <button>Connect Wallet</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
