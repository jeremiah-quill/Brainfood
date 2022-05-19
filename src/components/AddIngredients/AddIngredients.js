import React from 'react';
import AddIngredientForm from '../AddIngredientForm';
import IngredientContainer from '../IngredientContainer';
import Button from '../Button';

const AddIngredients = () => {
  function handleSearchRecipes() {
    console.log('display recipes');
  }

  return (
    <div className="flex flex-col gap-5 max-w-md m-auto">
      <AddIngredientForm />
      <IngredientContainer />
      <Button onClick={handleSearchRecipes} />
    </div>
  );
};

export default AddIngredients;
