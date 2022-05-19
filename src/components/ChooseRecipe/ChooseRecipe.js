import React from "react";
import Button from "../Button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const ChooseRecipe = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleChooseRecipe() {
    // TODO: API call to openAI to ask for instructions on how to cook a certain recipe
    navigate("/get-cookin");
  }

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
    <ul className="flex flex-col gap-2">
      {location.state.recipes.map((recipe, idx) => (
        <li key={idx}>
          <Button onClick={handleChooseRecipe} text={recipe} />
        </li>
      ))}
    </ul>
  );
};

export default ChooseRecipe;
