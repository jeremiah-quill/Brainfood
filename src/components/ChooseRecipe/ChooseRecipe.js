import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const ChooseRecipe = () => {
  const navigate = useNavigate();

  function handleChooseRecipe() {
    // TODO: API call to openAI to ask for instructions on how to cook a certain recipe
    navigate('/get-cookin');
  }

  return (
    <ul className="flex flex-col gap-2">
      <li>
        <Button onClick={handleChooseRecipe} text="recipe 1" />
      </li>
      <li>
        <Button onClick={handleChooseRecipe} text="recipe 2" />
      </li>
      <li>
        <Button onClick={handleChooseRecipe} text="recipe 3" />
      </li>
    </ul>
  );
};

export default ChooseRecipe;
