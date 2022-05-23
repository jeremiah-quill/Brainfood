import React, { useContext, useEffect } from "react";
import Button from "../Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { DispatchRecipeContext, RecipeContext } from "../../contexts/RecipeContext";
import useLoader from "../../hooks/useLoader";
import useToast from "../../hooks/useToast";
import API from "../../utils/API";

const ChooseRecipe = () => {
  const recipe = useContext(RecipeContext);
  const dispatchRecipe = useContext(DispatchRecipeContext);
  const [isLoading, startLoader, stopLoader] = useLoader();
  const [isError, showError, hideError] = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleChooseRecipe(recipeName) {
    dispatchRecipe({ type: "CHOOSE_RECIPE_NAME", name: recipeName });

    startLoader();

    const promptTemplate = `Write the instructions for the recipe for ${recipeName}:\n\nInstructions:`;

    // * API call
    try {
      const response = await API.generateInstructions(promptTemplate);
      if (response.status === 200) {
        let answerData = response.data.choices[0];
        let str = answerData.text;
        let regex = /([A-z].+)/g;
        const AiInstructions = str.match(regex);
        dispatchRecipe({ type: "ADD_INSTRUCTIONS", instructions: AiInstructions });
      }
    } catch (err) {
      showError("Sorry!  Something went wrong.");
      setTimeout(() => {
        hideError();
      }, 4000);
      stopLoader();
    }
  }

  useEffect(() => {
    if (recipe.instructions.length > 0) {
      stopLoader();
      navigate("/get-cookin");
    }
  }, [navigate, recipe.instructions, stopLoader]);

  if (location.state === null) {
    return (
      <h1>
        Hey, you're not supposed to be here yet! Click{" "}
        <Link className="underline text-orange-700 font-bold" to="/">
          here
        </Link>{" "}
        to select ingredients.
      </h1>
    );
  }

  return (
    <>
      <div className="bg-gray-200 p-10 rounded relative max-w-lg m-auto">
        <h2 className="m-auto mb-10">
          Based on your ingredients, Brainfood has come up with the 3 recipes below. Click on a
          recipe and Brainfood will generate you the instructions:
        </h2>
        <ul className="flex flex-col gap-5 items-center">
          {location.state.map((recipe, idx) => (
            <li key={idx}>
              <Button
                onClick={() => handleChooseRecipe(recipe)}
                uniqueClassNames="bg-gray-500 text-white hover:bg-green-600 transition-all"
                text={recipe}
              />
            </li>
          ))}
        </ul>
        {isLoading}
        {isError}
      </div>
    </>
  );
};

export default ChooseRecipe;
