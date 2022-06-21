import React from "react";
import ReactDOM from "react-dom";
import reactLogo from "./logo192.png";
import './index.css';

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

function Footer() {
  return (
    <footer className="footer"> © 2021 Ziroll development. All rights reserved.</footer>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
    </div>
  );
}

function PageComponent() {
  return (
    <div>
      <Header />
      <MainContent/>
      <Footer />
    </div>
  );
}

ReactDOM.render(<PageComponent />, document.getElementById("root"));
