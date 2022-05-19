import React, { useContext } from 'react';
import { useIngredientsContext } from '../../contexts/IngredientsContext';
import Ingredient from '../Ingredient';

const IngredientContainer = () => {
  const { ingredients } = useIngredientsContext();

  console.log(ingredients);

  return (
    <ul className="border-black border p-2 flex flex-wrap gap-2 rounded">
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </ul>
  );
};

export default IngredientContainer;
