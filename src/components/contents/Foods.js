import React from "react";
import Food from "./Food";
import FoodEmpty from "./FoodEmpty";

function Foods(props) {
  console.log(props);
  return (
    <div className="food-list">
      {props.data.count > 0 ? props.data.hits.map((item) => <Food key={item.recipe.image} data={item.recipe} />) : <FoodEmpty />}
    </div>
  );
}

export default Foods;
