import React, { useEffect, useState } from "react";
import axios from "axios";
import AddIngredientForm from "../AddIngredientForm";
import IngredientContainer from "../IngredientContainer";
import Button from "../Button";
import { useIngredientsContext } from "../../contexts/IngredientsContext";
import { useNavigate } from "react-router-dom";
import useLoader from "../../hooks/useLoader";

const AddIngredients = () => {
  const [recipes, setRecipes] = useState(null);

  const { ingredients, removeAllIngredients } = useIngredientsContext();

  const [isLoading, startLoader, stopLoader] = useLoader();

  const navigate = useNavigate();

  async function suggestRecipesBasedOnIngredients() {
    //* transform ingredient names into a format that we can inject into the openai prompt
    const formattedIngredients = ingredients
      .map((ingredient) => `${ingredient.name}\n`)
      .reduce((string, el) => string + el, "");

    const promptTemplate = `List three recipe names that each includes all of the following ingredients:\n\nIngredients:\n${formattedIngredients}\nRecipes: `;

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
        let answerData = response.data.choices[0];
        let str = answerData.text;
        let regex = /(?<=\. )(.*[a-zA-Z])/g;
        const suggestedRecipes = str.match(regex);
        // * Set recipes in state, which triggers a useEffect that navigates us to the next page
        setRecipes(suggestedRecipes);
      })
      .catch((err) => {
        // TODO: alert user that there was an error
        alert("there was an error");
      });
  }

  function handleSearchRecipes() {
    if (ingredients.length > 0) {
      startLoader();
      suggestRecipesBasedOnIngredients();
    } else {
      // TODO: alert user that they need to add ingredients
      alert("please add ingredients");
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
  }, [navigate, recipes]);

  return (
    <div className="flex flex-col gap-5 max-w-md m-auto bg-gray-200 p-10 rounded">
      <AddIngredientForm />
      <IngredientContainer />
      <div className="flex justify-between w-full">
        <Button
          onClick={handleClearIngredients}
          uniqueClassNames="bg-red-300 m-0"
          text="Clear All"
        />
        <Button
          onClick={handleSearchRecipes}
          uniqueClassNames="bg-green-300 m-0"
          text={"Suggest Recipes"}
        />
      </div>
      {isLoading}
    </div>
  );
};

export default AddIngredients;
