import React from "react";

function LikedRecipe(props) {
  return (
    <div className="pr-3 grid grid-cols-[auto_1fr] gap-3 rounded-md shadow-md">
      <img src={props.data.image} alt="" className="h-12 w-12 rounded" />
      <div>
        <div className="text-medium font-md line-clamp-1">{props.data.label}</div>
        <div className="text-sm text-slate-400">{props.data.mealType}</div>
      </div>
    </div>
  );
}

export default LikedRecipe;
