import React from "react";
import Results from "./Results";
import SearchBar from "./SearchBar";
import LikedModal from "./LikedModal";

function Contents() {
  return (
    <div className="px-4 md:px-12 lg:px-24">
      <SearchBar />
      <Results />
      <LikedModal />
    </div>
  );
}

export default Contents;
