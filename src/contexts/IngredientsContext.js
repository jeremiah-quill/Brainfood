import React, { createContext, useState, useContext } from 'react';
import uuid from 'react-uuid';

export const IngredientsContext = createContext();

export const useIngredientsContext = () => useContext(IngredientsContext);

export const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([
    { name: 'item 1', id: 1 },
    { name: 'item 2', id: 2 },
    { name: 'item 3', id: 3 },
  ]);

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

  return (
    <IngredientsContext.Provider value={{ ingredients, addIngredient, removeIngredient }}>
      {children}
    </IngredientsContext.Provider>
  );
};
