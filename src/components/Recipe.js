import React, { useState } from "react";
import background from "../img/food-banner.jpeg";

function Recipe(props) {
  return (
    <div className="relative rounded-lg shadow-lg overflow-clip">
      <img src={props.data.image} alt="" className="h-52" />
      <div className="p-3 ">
        <div className="font-bold line-clamp-2">{props.data.label}</div>
        <div className="capitalize">{props.data.cuisineType}</div>
      </div>
      <div className="absolute grid place-items-center top-2 right-2 h-7 w-7 bg-slate-50/80 rounded-full">
        <i className="bx bx-heart text-md"></i>
      </div>
    </div>
  );
}

export default Recipe;
