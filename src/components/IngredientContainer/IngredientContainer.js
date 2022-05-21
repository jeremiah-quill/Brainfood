import React from "react";
import { useIngredientsContext } from "../../contexts/IngredientsContext";
import Ingredient from "../Ingredient";

const IngredientContainer = () => {
  const { ingredients } = useIngredientsContext();

  return (
    <ul className="p-2 flex flex-wrap gap-2 rounded justify-center w-full min-h-[55px]">
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </ul>
  );
};

export default IngredientContainer;
