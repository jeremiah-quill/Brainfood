import React, { useContext } from "react";
import { RecipeContext } from "../../contexts/RecipeContext";
import Ingredient from "../Ingredient";

const IngredientContainer = () => {
  const recipe = useContext(RecipeContext);

  return (
    <ul className="p-2 flex flex-wrap gap-2 rounded justify-center w-full min-h-[55px]">
      {recipe.ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </ul>
  );
};

export default IngredientContainer;
