import React from "react";
import { Link, useLocation } from "react-router-dom";

const GetCookin = () => {
  const location = useLocation();

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
    <ol className="list-decimal list-inside w-10/12 max-w-screen-md">
      {location.state.map((step, idx) => (
        <li key={idx}>{step}</li>
      ))}
    </ol>
  );
};

export default GetCookin;
