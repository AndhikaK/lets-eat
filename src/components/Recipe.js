import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LikedContext } from "../App";

function Recipe(props) {
  const likedContext = useContext(LikedContext);
  const [isLiked, setisLiked] = useState(false);

  const addLiked = (data) => {
    likedContext.likedDispatch({ type: "add_liked", payload: data });
    setisLiked(true);
  };

  const removeLiked = (data) => {
    likedContext.likedDispatch({ type: "remove_liked", payload: data });
    setisLiked(false);
  };

  return (
    <div className="relative rounded-lg shadow-lg overflow-clip">
      <img src={props.data.image} alt="" className="h-52" />
      <div className="p-3 ">
        <Link to="/recipe" state={{ data: props.data }}>
          <div className="font-bold line-clamp-2 hover:underline">{props.data.label}</div>
        </Link>
        <div className="capitalize">{props.data.cuisineType}</div>
        <div className="text-sm text-slate-400 capitalize">{props.data.mealType}</div>
      </div>
      {!isLiked ? (
        <div
          onClick={() => addLiked(props.data)}
          className="absolute grid place-items-center top-2 right-2 h-7 w-7 bg-slate-50/80 text-red-500 rounded-full"
        >
          <i className="bx bx-heart text-md"></i>
        </div>
      ) : (
        <div
          onClick={() => removeLiked(props.data)}
          className="absolute grid place-items-center top-2 right-2 h-7 w-7 bg-red-500/80 text-white rounded-full"
        >
          <i className="bx bx-heart text-md"></i>
        </div>
      )}
    </div>
  );
}

export default Recipe;
