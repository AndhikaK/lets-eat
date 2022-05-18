import React, { useContext } from "react";
import { RecipeContext } from "../App";
import Recipes from "./Recipes";
import ResultEmpty from "./ResultEmpty";

function Results() {
  const recipeContext = useContext(RecipeContext);
  return (
    <div className="p-1 py-4">
      {recipeContext.recipeState.loading || recipeContext.recipeState.recipes.hits.length <= 0 ? <ResultEmpty /> : <Recipes />}
      {recipeContext.recipeState.error && <ResultEmpty />}
      {/* <ResultEmpty /> */}
    </div>
  );
}

export default Results;
