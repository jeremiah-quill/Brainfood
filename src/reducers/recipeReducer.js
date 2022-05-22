import uuid from "react-uuid";

export default function recipeReducer(state, action) {
  switch (action.type) {
    case "ADD_INGREDIENT":
      const ingredient = {
        id: uuid(),
        name: action.name,
      };
      return { ...state, ingredients: [...state.ingredients, ingredient] };
    case "REMOVE_INGREDIENT":
      const updatedIngredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== action.id
      );
      return { ...state, ingredients: updatedIngredients };
    case "REMOVE_ALL_INGREDIENTS":
      return { ...state, ingredients: [] };
    case "CHOOSE_RECIPE_NAME":
      return { ...state, name: action.name };
    case "ADD_INSTRUCTIONS":
      return { ...state, instructions: action.instructions };
    default:
      return state;
  }
}
