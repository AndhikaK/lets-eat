import React from "react";
import { Link } from "react-router-dom";

function LikedRecipe(props) {
  return (
    <div className="group relative pr-3 grid grid-cols-[auto_1fr] gap-3 rounded-md shadow-md">
      <img src={props.data.image} alt="" className="h-12 w-12 rounded" />
      <div>
        <Link to="/recipe" state={{ data: props.data }}>
          <div className="text-medium font-md line-clamp-1 hover:underline hover:text-sky-600">{props.data.label}</div>
        </Link>
        <div className="text-sm text-slate-400">{props.data.mealType}</div>
      </div>
    </div>
  );
}

export default LikedRecipe;
