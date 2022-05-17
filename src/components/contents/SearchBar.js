import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/search-bar.css";
import { FoodContext } from "../../layouts/Contents";

const edamamAccessPoint = process.env.REACT_APP_EDAMAM_ACCESS_POINT;
const edamamID = process.env.REACT_APP_EDAMAM_ID;
const edamamKey = process.env.REACT_APP_EDAMAM_KEY;

function SearchBar() {
  const foodContext = useContext(FoodContext);

  const [input, setInput] = useState("");

  const handleSearch = () => {
    axios
      .get(`${edamamAccessPoint}?type=public&q=${input}&app_key=${edamamKey}&app_id=${edamamID}`)
      .then((res) => {
        foodContext.foodDispatch({ type: "SEARCH_SUCCESS", payload: res.data, searchInput: input });
        console.log(foodContext.foodState);
      })
      .catch((err) => {
        foodContext.foodDispatch({ type: "SEARCH_FAILED", searchInput: input });
        console.log(foodContext.foodState);
        console.log(err);
      });
  };

  return (
    <div className="search-bar__container">
      <div className="search-bar">
        <input type="text" className="search-bar__input" placeholder="Search...." onChange={(e) => setInput(e.target.value)} />
        <button className="search-bar__btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {foodContext.foodState.searchInput !== "" && (
        <div className="list-info">
          Menampilkan hasil pencarian <b>{foodContext.foodState.searchInput}</b>
        </div>
      )}
      <Link to="/food">Food</Link>
    </div>
  );
}

export default SearchBar;
