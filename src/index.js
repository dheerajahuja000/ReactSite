import React from "react";
import ReactDOM from "react-dom";
import reactLogo from "./logo192.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={reactLogo} width="40px" />
      </nav>
    </header>
  );
}

function Footer() {
  return <footer> © 2021 Ziroll development. All rights reserved.</footer>;
}

function MainContent() {
  return (
    <div>
      <h1>Heading</h1>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
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
