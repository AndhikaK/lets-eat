import React from "react";
import Results from "./Results";
import SearchBar from "./SearchBar";

function Contents() {
  return (
    <div className="px-4 md:px-12 lg:px-24">
      <SearchBar />
      <Results />
    </div>
  );
}

export default Contents;
