import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import { createContext, useReducer } from "react";
import axios from "axios";

export const InputContext = createContext();
export const RecipeContext = createContext();

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

function App() {
  const [input, dispatchInput] = useReducer(inputReducer, initialInput);
  const [recipes, dispatchRecipe] = useReducer(recipeReducer, initialRecipe);

  return (
    <InputContext.Provider value={{ inputState: input, inputDispatch: dispatchInput }}>
      <RecipeContext.Provider value={{ recipeState: recipes, recipeDispatch: dispatchRecipe }}>
        <div className=" grid grid-rows-[auto_1fr_auto]">
          <Header />
          <Contents />
          <Footer />
        </div>
      </RecipeContext.Provider>
    </InputContext.Provider>
  );
}

export default App;
