import React from "react";
import { useRecipeContext } from "../../contexts/RecipeContext";
import Ingredient from "../Ingredient";

const IngredientContainer = () => {
  const { recipe } = useRecipeContext();

  return (
    <ul className="p-2 flex flex-wrap gap-2 rounded justify-center w-full min-h-[55px]">
      {recipe.ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </ul>
  );
};

export default IngredientContainer;
