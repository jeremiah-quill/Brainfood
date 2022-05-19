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

  return <div>{location.state.recipe}</div>;
};

export default GetCookin;
