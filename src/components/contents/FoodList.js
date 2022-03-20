import React, { useContext } from "react";
import "../../assets/styles/foodlist.css";
import { FoodContext } from "../../layouts/Contents";
import FoodEmpty from "./FoodEmpty";
import Foods from "./Foods";

function FoodList() {
  const foodContext = useContext(FoodContext);

  return (
    <div className="food-content">{Object.keys(foodContext.foodState.foodList).length !== 0 && <Foods data={foodContext.foodState.foodList} />}</div>
  );
}

export default FoodList;
