import React, { useState } from "react";

function SearchBar() {
  const [input, setInput] = useState("");

  return (
    <div className="grid sticky top-0 p-5 pt-7 border-b border-b-slate-200 bg-white">
      <input
        type="text"
        className="p-3 text-lg font-medium ring-0 border-0 bg-slate-100 rounded-lg focus:bg-white focus:outline-slate-300"
        placeholder="Search..."
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
