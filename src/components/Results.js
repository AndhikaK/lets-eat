import React, { useContext } from "react";
import { InputContext, RecipeContext } from "../App";
import LikedModal from "./LikedModal";
import Recipes from "./Recipes";
import ResultEmpty from "./ResultEmpty";

function Results() {
  const recipeContext = useContext(RecipeContext);
  const inputContext = useContext(InputContext);
  return (
    <div className="p-1 py-4">
      {recipeContext.recipeState.loading || recipeContext.recipeState.recipes.hits.length <= 0 ? <ResultEmpty /> : <Recipes />}
      {recipeContext.recipeState.error && <ResultEmpty />}
    </div>
  );
}

export default Results;
