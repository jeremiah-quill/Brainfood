import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useIngredientsContext } from "../../contexts/IngredientsContext";
import useLoader from "../../hooks/useLoader";
import useToast from "../../hooks/useToast";

const ChooseRecipe = () => {
  const [instructions, setInstructions] = useState(null);
  const { chooseRecipeName } = useIngredientsContext();
  const [isLoading, startLoader, stopLoader] = useLoader();
  const [isError, showError, hideError] = useToast();

  const navigate = useNavigate();
  const location = useLocation();

  function handleChooseRecipe(recipeName) {
    chooseRecipeName(recipeName);
    startLoader();

    const promptTemplate = `Write the instructions for the recipe for ${recipeName}:\n\nInstructions:`;

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
        const AiInstructions = str.match(regex);
        // * Set recipe in state, which triggers a useEffect that navigates us to the next page
        setInstructions(AiInstructions);
      })
      .catch((err) => {
        showError("Sorry!  Something went wrong.");
        setTimeout(() => {
          hideError();
        }, 4000);
        stopLoader();
      });
  }

  useEffect(() => {
    if (instructions !== null) {
      stopLoader();
      navigate("/get-cookin", { state: instructions });
    }
  }, [navigate, instructions, stopLoader]);

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
