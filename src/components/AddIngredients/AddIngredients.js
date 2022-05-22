import React, { useEffect, useState } from "react";
import axios from "axios";
import AddIngredientForm from "../AddIngredientForm";
import IngredientContainer from "../IngredientContainer";
import Button from "../Button";
import { useIngredientsContext } from "../../contexts/IngredientsContext";
import { useNavigate } from "react-router-dom";
import useLoader from "../../hooks/useLoader";
import useToast from "../../hooks/useToast";

const AddIngredients = () => {
  const [recipes, setRecipes] = useState(null);

  const { ingredients, removeAllIngredients } = useIngredientsContext();

  const [isLoading, startLoader, stopLoader] = useLoader();
  const [isError, showError, hideError] = useToast();

  const navigate = useNavigate();

  async function suggestRecipesBasedOnIngredients() {
    //* transform ingredient names into a format that we can inject into the openai prompt
    const formattedIngredients = ingredients
      .map((ingredient) => `${ingredient.name}\n`)
      .reduce((string, el) => string + el, "");

    const promptTemplate = `Write three recipe names based on these ingredients:\n\nIngredients:\n${formattedIngredients}\nRecipe names: `;

    const data = {
      prompt: promptTemplate,
      temperature: 0.3,
      max_tokens: 250,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
    };

    axios
      .post(
        "https://api.openai.com/v1/engines/text-davinci-002/completions",
        JSON.stringify(data),
        {
          headers,
        }
      )
      .then((response) => {
        // console.log(response)
        let answerData = response.data.choices[0];
        let str = answerData.text;
        // let regex = /(?<=\. )(.*[a-zA-Z])/g;
        let regex = /([A-z].+)/g;

        const suggestedRecipes = str.match(regex);
        // * Set recipes in state, which triggers a useEffect that navigates us to the next page
        setRecipes(suggestedRecipes);
      })
      .catch((err) => {
        showError("Sorry!  Something went wrong.");
        setTimeout(() => {
          hideError();
        }, 4000);
        stopLoader();
      });
  }

  function handleSearchRecipes() {
    if (ingredients.length > 0) {
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
    removeAllIngredients();
  }

  useEffect(() => {
    if (recipes !== null) {
      stopLoader();
      navigate("/choose-recipe", { state: recipes });
    }
  }, [navigate, recipes, stopLoader]);

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
