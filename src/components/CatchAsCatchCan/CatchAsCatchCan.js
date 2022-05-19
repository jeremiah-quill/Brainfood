import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddIngredients from '../AddIngredients';
import ChooseRecipe from '../ChooseRecipe';
import GetCookin from '../GetCookin';
import About from '../About';
import { IngredientsProvider } from '../../contexts/IngredientsContext';

const CatchAsCatchCan = () => {
  return (
    <>
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
