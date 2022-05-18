import React from "react";
import background from "../img/food-banner.jpeg";

function Header() {
  return (
    <div className="grid place-items-center h-52 bg-center border" style={{ backgroundImage: `url(${background})` }}>
      <div className="text-center text-white" style={{ textShadow: "2px 2px 10px black" }}>
        <div className="text-8xl">Let's Eat</div>
        <div className="text-base mt-3">Find foods that you wants!</div>
      </div>
    </div>
  );
}

export default Header;
