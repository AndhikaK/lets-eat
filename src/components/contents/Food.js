import React from "react";

function Food(props) {
  return (
    <div className="food-item">
      <img src={props.data.image} className="food-item__img" alt="" />
      <div className="food-item__desc">{props.data.label}</div>
    </div>
  );
}

export default Food;
