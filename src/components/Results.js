import React from "react";
import Recipes from "./Recipes";
import ResultEmpty from "./ResultEmpty";

function Results() {
  return (
    <div className="p-5">
      <Recipes />
      {/* <ResultEmpty /> */}
    </div>
  );
}

export default Results;
