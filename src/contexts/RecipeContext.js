import React, { createContext, useState, useContext } from "react";
import uuid from "react-uuid";

export const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [chosenRecipeName, setChosenRecipeName] = useState(null);
  const [instructions, setInstructions] = useState(null);

  function addIngredient(newIngredient) {
    const ingredient = {
      id: uuid(),
      name: newIngredient,
    };

    setIngredients((curr) => [...curr, ingredient]);
  }

  function removeIngredient(id) {
    setIngredients((curr) => curr.filter((ingredient) => ingredient.id !== id));
  }

  function removeAllIngredients(id) {
    setIngredients([]);
  }

  function chooseRecipeName(name) {
    setChosenRecipeName(name);
  }

  function addInstructions(recipeInstructions) {
    setInstructions(recipeInstructions);
  }

  return (
    <RecipeContext.Provider
      value={{
        ingredients,
        addIngredient,
        removeIngredient,
        removeAllIngredients,
        chooseRecipeName,
        chosenRecipeName,
        addInstructions,
        instructions,
      }}>
      {children}
    </RecipeContext.Provider>
  );
};
