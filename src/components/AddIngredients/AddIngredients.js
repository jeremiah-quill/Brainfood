import React, { useEffect, useCallback } from "react";
import AddIngredientForm from "../AddIngredientForm";
import IngredientContainer from "../IngredientContainer";
import Button from "../Button";
import useLoader from "../../hooks/useLoader";
import useToast from "../../hooks/useToast";
import { useRecipeContext } from "../../contexts/RecipeContext";
import { useNavigate } from "react-router-dom";
import API from "../../utils/API";

const AddIngredients = () => {
  const [isLoading, startLoader, stopLoader] = useLoader();
  const [isError, showError, hideError] = useToast();
  const navigate = useNavigate();
  const { recipe, dispatchRecipe } = useRecipeContext();

  // * call API with ingredients, and get back 3 suggested recipes in return
  async function suggestRecipesBasedOnIngredients() {
    // transform ingredient names into a format that we can inject into the openai prompt
    const formattedIngredients = recipe.ingredients
      .map((ingredient) => `${ingredient.name}\n`)
      .reduce((string, el) => string + el, "");

    const promptTemplate = `Write three recipe names based on these ingredients:\n\nIngredients:\n${formattedIngredients}\nRecipe names: `;

    // * API call
    try {
      const response = await API({
        type: "SEARCH_FOR_RECIPES",
        promptTemplate: promptTemplate,
      });
      if (response.status === 200) {
        let answerData = response.data.choices[0];
        let str = answerData.text;
        let regex = /([A-z].+)/g;
        const suggestedRecipes = str.match(regex);
        stopLoader();
        navigate("/choose-recipe", { state: suggestedRecipes });
      }
    } catch (err) {
      showError("Sorry!  Something went wrong.");
      setTimeout(() => {
        hideError();
      }, 4000);
      stopLoader();
    }
  }

  function handleSearchRecipes() {
    if (recipe.ingredients.length > 0) {
      startLoader();
      suggestRecipesBasedOnIngredients();
    } else {
      showError("Please add ingredients to generate a recipe.");
      setTimeout(() => {
        hideError();
      }, 4000);
    }
  }

  function handleClearIngredients() {
    dispatchRecipe({ type: "REMOVE_ALL_INGREDIENTS" });
  }

  const memoizedDispatch = useCallback(() => {
    return dispatchRecipe({ type: "CLEAR_RECIPE" });
  }, [dispatchRecipe]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  return (
    <div className="flex flex-col gap-5 max-w-md bg-gray-200 p-10 rounded m-auto">
      <AddIngredientForm />
      <IngredientContainer />
      <div className="flex justify-between w-full">
        <Button
          onClick={handleClearIngredients}
          uniqueClassNames="bg-red-400 m-0 transition-all"
          text="Clear All"
        />
        <Button
          onClick={handleSearchRecipes}
          uniqueClassNames="bg-green-400 m-0 transition-all"
          text={"Generate Recipes"}
        />
      </div>
      {isLoading}
      {isError}
    </div>
  );
};

export default AddIngredients;
