import React, { useContext } from "react";
import { RecipeContext } from "../App";
import Recipe from "./Recipe";

function Recipes() {
  const recipeContext = useContext(RecipeContext);
  return (
    <div className="mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 gap-y-4">
      {recipeContext.recipeState.recipes.hits.map((recipe) => (
        <Recipe key={recipe.recipe.url} data={recipe.recipe} />
      ))}
    </div>
  );
}

export default Recipes;
