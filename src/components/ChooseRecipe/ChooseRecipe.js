import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const ChooseRecipe = () => {
  const [instructions, setInstructions] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  function handleChooseRecipe() {
    // TODO: API call to openAI to ask for instructions on how to cook a certain recipe

    //* transform ingredient names into a format that we can inject into the openai prompt
    // const formattedIngredients = ingredients
    //   .map((ingredient) => `${ingredient.name}\n`)
    //   .reduce((string, el) => string + el, "");

    // const promptTemplate = `List three recipe names that each includes all of the following ingredients:\n\nIngredients:\n${formattedIngredients}\nRecipes: `;

    const promptTemplate = `Write the instructions for the recipe for Penne with Chicken and Peas:\n\nInstructions:`;

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
        console.log(response.data);
        let answerData = response.data.choices[0];
        let str = answerData.text;
        console.log(str);
        let regex = /(?<=\. )(.*[a-zA-Z])/g;
        const instructions = str.match(regex);
        // * Set recipe in state, which triggers a useEffect that navigates us to the next page
        setInstructions(instructions);
      })
      .catch((err) => {
        // TODO: alert user that there was an error
        console.log(err);
      });

    // setRecipe("get cookin good lookin!");
  }

  useEffect(() => {
    if (instructions !== null) {
      navigate("/get-cookin", { state: instructions });
    }
  }, [navigate, instructions]);

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

  console.log(location.state);

  return (
    <ul className="flex flex-col gap-2">
      {location.state.map((recipe, idx) => (
        <li key={idx}>
          <Button
            onClick={handleChooseRecipe}
            uniqueClassNames="bg-gray-300 hover:brightness-110"
            text={recipe}
          />
        </li>
      ))}
    </ul>
  );
};

export default ChooseRecipe;
