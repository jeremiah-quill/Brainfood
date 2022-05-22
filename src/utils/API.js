import axios from "axios";

// * headers and url to include in API calls
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
};
const url = "https://api.openai.com/v1/engines/text-davinci-002/completions";

// * object containing 2 custom API methods for generating recipe names and generating recipe instructions
const API = {
  async searchForRecipes(promptTemplate) {
    const data = {
      prompt: promptTemplate,
      temperature: 0.3,
      max_tokens: 250,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    const response = await axios.post(url, JSON.stringify(data), {
      headers,
    });
    return response;
  },
  async generateInstructions(promptTemplate) {
    const data = {
      prompt: promptTemplate,
      temperature: 0.3,
      max_tokens: 250,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    const response = await axios.post(url, JSON.stringify(data), {
      headers,
    });
    return response;
  },
};

export default API;
