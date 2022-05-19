import React, { useState } from 'react';
import { useIngredientsContext } from '../../contexts/IngredientsContext';

const AddIngredientForm = () => {
  const [ingredientValue, setIngredientValue] = useState('');

  const { addIngredient } = useIngredientsContext();

  function handleValueChange(e) {
    setIngredientValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addIngredient(ingredientValue);
    setIngredientValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="m-auto block bg-transparent border-b border-black p-2"
        placeholder="Add ingredients..."
        type="text"
        value={ingredientValue}
        onChange={handleValueChange}
      />
    </form>
  );
};

export default AddIngredientForm;
