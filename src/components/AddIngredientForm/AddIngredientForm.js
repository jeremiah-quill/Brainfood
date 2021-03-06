import React, { useState, useContext } from "react";
import { DispatchRecipeContext } from "../../contexts/RecipeContext";

const AddIngredientForm = () => {
  // * controlled input
  const [ingredientValue, setIngredientValue] = useState("");
  function handleValueChange(e) {
    setIngredientValue(e.target.value);
  }

  // * add ingredient to state on submit of new ingredient
  const dispatchRecipe = useContext(DispatchRecipeContext);
  function handleSubmit(e) {
    e.preventDefault();
    dispatchRecipe({ type: "ADD_INGREDIENT", name: ingredientValue });
    setIngredientValue("");
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

export default React.memo(AddIngredientForm);
