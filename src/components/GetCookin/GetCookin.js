import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useIngredientsContext } from "../../contexts/IngredientsContext";

const GetCookin = () => {
  const location = useLocation();

  const { ingredients, chosenRecipeName } = useIngredientsContext();

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
      <div className="bg-gray-200 p-10 rounded">
        <h2 className="text-4xl mb-10 text-center">{chosenRecipeName}</h2>
        <h3 className="text-xl">Your Ingredients</h3>
        <ul className="mb-10">
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
        </ul>
        <ol className="list-decimal list-inside w-10/12 max-w-screen-md">
          {location.state.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
      <Link className="p-2 mt-5 bg-yellow-500 rounded hover:brightness-125 transition-all" to="/">
        Start Over
      </Link>
    </>
  );
};

export default GetCookin;
