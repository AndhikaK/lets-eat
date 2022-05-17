import React from "react";
import { Link } from "react-router-dom";

function Food(props) {
  return (
    <Link to="food">
      <div className="food-item">
        <img src={props.data.image} className="food-item__img" alt="" />
        <div className="food-item__desc">{props.data.label}</div>
      </div>
    </Link>
  );
}

export default Food;
