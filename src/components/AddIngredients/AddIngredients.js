import React from 'react';
import AddIngredientForm from '../AddIngredientForm';
import IngredientContainer from '../IngredientContainer';
import Button from '../Button';
import { useIngredientsContext } from '../../contexts/IngredientsContext';
import { useNavigate } from 'react-router-dom';

const AddIngredients = () => {
  const { ingredients } = useIngredientsContext();

  const navigate = useNavigate();

  function handleSearchRecipes() {
    const ingredientNames = ingredients.map((el) => el.name);
    console.log(ingredientNames);
    navigate('/choose-recipe');
  }

  return (
    <div className="flex flex-col gap-5 max-w-md m-auto">
      <AddIngredientForm />
      <IngredientContainer />
      <Button onClick={handleSearchRecipes} text={'Suggest Recipes'} />
    </div>
  );
};

export default AddIngredients;
