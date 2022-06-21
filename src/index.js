import React from "react";
import ReactDOM from "react-dom";
import reactLogo from "./logo192.png";

function PageComponent() {
  return (
    <div>
      <header>
        <nav>
          <img src={reactLogo} width="40px" />
        </nav>
      </header>

      <h1>Heading</h1>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <footer>  © 2021 Ziroll development. All rights reserved.</footer>
    </div>
  );
}

ReactDOM.render(<PageComponent />, document.getElementById("root"));
