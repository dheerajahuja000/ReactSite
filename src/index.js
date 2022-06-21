import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

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
