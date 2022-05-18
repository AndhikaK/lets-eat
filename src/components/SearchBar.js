import axios from "axios";
import React, { useContext, useState } from "react";
import { InputContext, RecipeContext } from "../App";

function SearchBar() {
  const inputContext = useContext(InputContext);
  const recipeContext = useContext(RecipeContext);

  const getRecipe = () => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${inputContext.inputState}&app_id=4df57a1f&app_key=556178a57a9e1358a4bdc2c17543be74`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        recipeContext.recipeDispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {});
  };

  return (
    <div className="z-50 grid grid-cols-[1fr_auto] gap-2 sticky top-0 p-5 px-1 pt-7 border-b border-b-slate-200 bg-white">
      <input
        type="text"
        className="p-3 text-lg font-medium ring-0 border-0 bg-slate-100 rounded-lg focus:bg-white focus:outline-slate-300"
        placeholder="Search..."
        onChange={(e) => inputContext.inputDispatch({ type: "onchange", input: e.target.value })}
        value={inputContext.inputState}
      />
      <button className="bg-slate-500 px-4 rounded-md focus:ring-1 focus:ring-slate-900" onClick={getRecipe}>
        <i className="bx bx-search-alt-2 text-slate-200 text-xl"></i>
      </button>
    </div>
  );
}

export default SearchBar;
