import React, { useContext } from "react";
import { DispatchRecipeContext } from "../../contexts/RecipeContext";
import { MdClose } from "react-icons/md";

const Ingredient = ({ ingredient }) => {
  const dispatchRecipe = useContext(DispatchRecipeContext);

  function handleRemoveIngredient() {
    dispatchRecipe({ type: "REMOVE_INGREDIENT", id: ingredient.id });
  }

  console.log(ingredient.name);

  return (
    <li className="py-1 px-2 rounded flex items-center gap-2 bg-gray-500 text-white">
      <div>
        <h2 className="align-text-bottom inline-block">{ingredient.name}</h2>
      </div>
      <button
        className="hover:scale-125 hover:bg-red-300 rounded transition-all"
        onClick={handleRemoveIngredient}>
        <MdClose />
      </button>
    </li>
  );
};

export default React.memo(Ingredient);
