import React from "react";
import { Route, Routes } from "react-router-dom";
import RecipeDetail from "./RecipeDetail";
import Results from "./Results";
import SearchBar from "./SearchBar";

function Contents() {
  return (
    <div className="px-4 md:px-12 lg:px-24">
      <SearchBar />
      <Routes>
        <Route path="/" element={<Results />} />
        <Route path="recipe" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default Contents;
