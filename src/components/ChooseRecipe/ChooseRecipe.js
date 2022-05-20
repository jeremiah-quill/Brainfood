import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useIngredientsContext } from "../../contexts/IngredientsContext";

const ChooseRecipe = () => {
  const [instructions, setInstructions] = useState(null);
  const { chooseRecipeName } = useIngredientsContext();
  const navigate = useNavigate();
  const location = useLocation();

  function handleChooseRecipe(recipeName) {
    chooseRecipeName(recipeName);

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
        alert("an error occured");
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
    <div className="bg-gray-200 p-10 rounded">
      <h2 className="mb-20 max-w-lg">
        Our AI Chef was kind enough to come up with 3 recipes that include your ingredients. Choose
        from the suggestions below and our AI will generate a full recipe for you to follow.
      </h2>
      <ul className="flex flex-col gap-5 items-center">
        {location.state.map((recipe, idx) => (
          <li key={idx}>
            <Button
              onClick={() => handleChooseRecipe(recipe)}
              uniqueClassNames="bg-gray-300 hover:brightness-110"
              text={recipe}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChooseRecipe;
