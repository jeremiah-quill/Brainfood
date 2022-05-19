import React, {useState} from "react";

const AddIngredientForm = () => {
  const [ingredientValue, setIngredientValue] = useState("")

  function handleValueChange(e) {
    setIngredientValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(`added ${ingredientValue}`)
    setIngredientValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="m-auto block bg-transparent border-b border-black p-2" placeholder="Add ingredients..." type="text" value={ingredientValue} onChange={handleValueChange}/>
    </form>
  );
};

export default AddIngredientForm;
