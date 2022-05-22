import axios from "axios";

export default async function API(action) {
  // * headers and url to include in API calls
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
  };
  const url = "https://api.openai.com/v1/engines/text-davinci-002/completions";

  // * access to 2 API calls: SEARCH_FOR_RECIPES & GENERATE_INSTRUCTIONS
  switch (action.type) {
    case "SEARCH_FOR_RECIPES":
      const recipesData = {
        prompt: action.promptTemplate,
        temperature: 0.3,
        max_tokens: 250,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };
      const recipesResponse = axios.post(url, JSON.stringify(recipesData), {
        headers,
      });
      return recipesResponse;

    case "GENERATE_INSTRUCTIONS":
      const instructionsData = {
        prompt: action.promptTemplate,
        temperature: 0.3,
        max_tokens: 250,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };
      const instructionsResponse = await axios.post(url, JSON.stringify(instructionsData), {
        headers,
      });
      return instructionsResponse;
    default:
      return null;
  }
}
