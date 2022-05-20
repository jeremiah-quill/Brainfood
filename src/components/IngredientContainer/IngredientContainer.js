import React from "react";
import { useIngredientsContext } from "../../contexts/IngredientsContext";
import Ingredient from "../Ingredient";

const IngredientContainer = () => {
  const { ingredients } = useIngredientsContext();

  return (
    <ul
      style={{ minHeight: "55px", width: "280px" }}
      className="border-black border p-2 flex flex-wrap gap-2 rounded">
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </ul>
  );
};

export default IngredientContainer;
