import React from "react";
import reactLogo from "./logo192.png";

function Header() {
    return (
      <header>
        <nav className="navbar">
          <img src={reactLogo} className="img-logo" />
          <ul className="nav-items">
            <li>About</li>
            <li>Contact</li>
            <li>Pricing</li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;