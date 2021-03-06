import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../../contexts/RecipeContext";

const GetCookin = () => {
  const recipe = useContext(RecipeContext);

  if (recipe.instructions === null) {
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
      <div className="bg-gray-200 p-10 rounded max-w-xl m-auto">
        <h2 className="text-4xl mb-10 text-center">{recipe.name}</h2>
        <h3 className="text-xl">Your Ingredients</h3>
        <ul className="mb-10">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
        </ul>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
      <Link
        className="p-2 m-auto mt-5 bg-yellow-500 rounded hover:brightness-125 transition-all block w-fit"
        to="/">
        Start Over
      </Link>
    </>
  );
};

export default GetCookin;
