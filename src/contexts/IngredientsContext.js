import React, { createContext, useState, useContext } from "react";
import uuid from "react-uuid";

export const IngredientsContext = createContext();

export const useIngredientsContext = () => useContext(IngredientsContext);

export const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [chosenRecipeName, setChosenRecipeName] = useState(null);

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

  return (
    <IngredientsContext.Provider
      value={{
        ingredients,
        addIngredient,
        removeIngredient,
        removeAllIngredients,
        chooseRecipeName,
        chosenRecipeName,
      }}>
      {children}
    </IngredientsContext.Provider>
  );
};
