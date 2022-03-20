import React, { useContext } from "react";
import { FoodContext } from "../../layouts/Contents";

function FoodEmpty() {
  const foodContext = useContext(FoodContext);

  return <div className="food-empty">No result found for '{foodContext.foodState.searchInput}'</div>;
}

export default FoodEmpty;
