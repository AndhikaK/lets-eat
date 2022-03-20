import React from "react";
import "../assets/styles/header.css";

function Header() {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url("https://thumbs.dreamstime.com/b/wooden-table-food-top-view-cafe-102532611.jpg")`,
      }}
    >
      <div className="app-title">Let's Eat</div>
      <div className="app-subtitle">Find a dish that you want</div>
    </div>
  );
}

export default Header;
