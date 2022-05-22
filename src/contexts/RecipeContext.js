import React, { createContext, useState, useContext, useReducer } from "react";
import recipeReducer from "../reducers/recipeReducer";
import uuid from "react-uuid";

export const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  // const [recipe, setRecipe] = useState({ name: "", ingredients: [], instructions: [] });

  const [recipe, dispatchRecipe] = useReducer(recipeReducer, {
    name: "",
    ingredients: [],
    instructions: [],
  });

  // function addIngredient(newIngredient) {
  //   const ingredient = {
  //     id: uuid(),
  //     name: newIngredient,
  //   };

  //   setRecipe((curr) => ({ ...curr, ingredients: [...curr.ingredients, ingredient] }));
  // }

  // function removeIngredient(id) {
  //   setRecipe((curr) => {
  //     const updatedIngredients = curr.ingredients.filter((ingredient) => ingredient.id !== id);
  //     return { ...curr, ingredients: updatedIngredients };
  //   });
  // }

  // function removeAllIngredients() {
  //   setRecipe((curr) => ({ ...curr, ingredients: [] }));
  // }

  // function chooseRecipeName(name) {
  //   setRecipe((curr) => ({ ...curr, name: name }));
  // }

  // function addInstructions(recipeInstructions) {
  //   setRecipe((curr) => ({ ...curr, instructions: recipeInstructions }));
  // }

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        dispatchRecipe,
        // addIngredient,
        // removeIngredient,
        // removeAllIngredients,
        // chooseRecipeName,
        // addInstructions,
      }}>
      {children}
    </RecipeContext.Provider>
  );
};
