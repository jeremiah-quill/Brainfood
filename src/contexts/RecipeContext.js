import React, { createContext, useContext, useReducer } from "react";
import recipeReducer from "../reducers/recipeReducer";

export const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [recipe, dispatchRecipe] = useReducer(recipeReducer, {
    name: "",
    ingredients: [],
    instructions: [],
  });
  return (
    <RecipeContext.Provider
      value={{
        recipe,
        dispatchRecipe,
      }}>
      {children}
    </RecipeContext.Provider>
  );
};
