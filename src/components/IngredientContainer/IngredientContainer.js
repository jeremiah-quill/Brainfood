import React from "react";
import { useIngredientsContext } from "../../contexts/IngredientsContext";
import Ingredient from "../Ingredient";

const IngredientContainer = () => {
  const { ingredients } = useIngredientsContext();

  return (
    <ul
      style={{ minHeight: "55px", width: "300px" }}
      className="p-2 flex flex-wrap gap-2 rounded justify-center">
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </ul>
  );
};

export default IngredientContainer;
