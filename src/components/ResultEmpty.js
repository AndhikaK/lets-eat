import React, { useContext } from "react";
import { InputContext } from "../App";

function ResultEmpty() {
  const inputContext = useContext(InputContext);
  return (
    <div className="h-full my-64 text-slate-400 text-2xl font-medium text-center align-middle">No result found for '{inputContext.inputState}'</div>
  );
}

export default ResultEmpty;
