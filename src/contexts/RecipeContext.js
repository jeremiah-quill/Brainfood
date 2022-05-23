import React, { createContext, useReducer } from "react";
import recipeReducer from "../reducers/recipeReducer";

export const RecipeContext = createContext();
export const DispatchRecipeContext = createContext();

// export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [recipe, dispatchRecipe] = useReducer(recipeReducer, {
    name: "",
    ingredients: [],
    instructions: [],
  });
  return (
    <RecipeContext.Provider value={recipe}>
      <DispatchRecipeContext.Provider value={dispatchRecipe}>
        {children}
      </DispatchRecipeContext.Provider>
    </RecipeContext.Provider>
  );
};
