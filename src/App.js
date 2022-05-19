import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import { createContext, useReducer } from "react";
import axios from "axios";
import LikedModal from "./components/LikedModal";

export const InputContext = createContext();
export const RecipeContext = createContext();
export const LikedContext = createContext();

const initialInput = "";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "onchange":
      return action.input;

    default:
      return state;
  }
};

const initialRecipe = {
  loading: true,
  error: false,
  recipes: {},
};
const recipeReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: false,
        recipes: action.payload,
      };

    default:
      return state;
  }
};

const initialLiked = [];
const likeReducer = (state, action) => {
  switch (action.type) {
    case "add_liked":
      return [...state, action.payload];

    case "remove_liked":
      return state.filter((el) => {
        return el.uri !== action.payload.uri;
      });
    default:
      return state;
  }
};

function App() {
  const [input, dispatchInput] = useReducer(inputReducer, initialInput);
  const [recipes, dispatchRecipe] = useReducer(recipeReducer, initialRecipe);
  const [liked, dispatchLiked] = useReducer(likeReducer, initialLiked);

  return (
    <InputContext.Provider value={{ inputState: input, inputDispatch: dispatchInput }}>
      <RecipeContext.Provider value={{ recipeState: recipes, recipeDispatch: dispatchRecipe }}>
        <LikedContext.Provider value={{ likedState: liked, likedDispatch: dispatchLiked }}>
          <div className=" grid grid-rows-[auto_1fr_auto]">
            <Header />
            <Contents />
            <Footer />
            <LikedModal />
          </div>
        </LikedContext.Provider>
      </RecipeContext.Provider>
    </InputContext.Provider>
  );
}

export default App;
