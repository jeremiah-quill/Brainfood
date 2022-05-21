import React from "react";
import { Routes, Route } from "react-router-dom";
import AddIngredients from "../AddIngredients";
import ChooseRecipe from "../ChooseRecipe";
import GetCookin from "../GetCookin";
import About from "../About";
import Navbar from "../Navbar";
import { IngredientsProvider } from "../../contexts/IngredientsContext";

const CatchAsCatchCan = () => {
  return (
    <>
      <Navbar />
      <img src="./ai_chef_logo_square_white.png" className="w-20 sm:w-40 relative bottom-20" />
      <IngredientsProvider>
        <Routes>
          <Route path="/" element={<AddIngredients />} />
          <Route path="/choose-recipe" element={<ChooseRecipe />} />
          <Route path="/get-cookin" element={<GetCookin />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </IngredientsProvider>
    </>
  );
};

export default CatchAsCatchCan;
