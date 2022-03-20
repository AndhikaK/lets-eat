import React, { useReducer } from "react";
import FoodList from "../components/contents/FoodList";
import SearchBar from "../components/contents/SearchBar";
import { foodReducer } from "../services/reducer/foodReducer";
import "../assets/styles/contents.css";

export const FoodContext = React.createContext();

const initialState = {
  searchInput: "",
  loadingState: false,
  error: false,
  foodList: {},
};

function Contents() {
  const [foodData, foodDispatch] = useReducer(foodReducer, initialState);

  return (
    <FoodContext.Provider value={{ foodState: foodData, foodDispatch: foodDispatch }}>
      <div className="contents">
        <SearchBar />
        <FoodList />
      </div>
    </FoodContext.Provider>
  );
}

export default Contents;
