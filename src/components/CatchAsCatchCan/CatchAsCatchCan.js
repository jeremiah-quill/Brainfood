import React from "react";
import { Routes, Route } from "react-router-dom";
import AddIngredients from "../AddIngredients";
import ChooseRecipe from "../ChooseRecipe";
import GetCookin from "../GetCookin";
import Navbar from "../Navbar";
import { RecipeProvider } from "../../contexts/RecipeContext";

const CatchAsCatchCan = () => {
  return (
    <>
      <Navbar />
      <img
        alt="logo"
        src="./ai_chef_logo_square_white.png"
        className="m-auto w-40 relative bottom-20 z-10"
      />
      <RecipeProvider>
        <Routes>
          <Route path="/" element={<AddIngredients />} />
          <Route path="/choose-recipe" element={<ChooseRecipe />} />
          <Route path="/get-cookin" element={<GetCookin />} />
        </Routes>
      </RecipeProvider>
    </>
  );
};

export default CatchAsCatchCan;
