import React, { useContext, useState } from "react";
import { LikedContext } from "../App";
import background from "../img/food-banner.jpeg";

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
        <div className="font-bold line-clamp-2">{props.data.label}</div>
        <div className="capitalize">{props.data.cuisineType}</div>
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
