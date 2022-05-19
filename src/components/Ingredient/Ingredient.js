import React from 'react';
import { useIngredientsContext } from '../../contexts/IngredientsContext';
import { MdClose } from 'react-icons/md';

const Ingredient = ({ ingredient }) => {
  const { removeIngredient } = useIngredientsContext();

  function handleRemoveIngredient() {
    removeIngredient(ingredient.id);
  }

  return (
    <li className="p-1 rounded flex items-center gap-2 bg-gray-300">
      <div>
        <h2 className="align-text-bottom inline-block">{ingredient.name}</h2>
      </div>
      <button onClick={handleRemoveIngredient}>
        <MdClose />
      </button>
    </li>
  );
};

export default Ingredient;
