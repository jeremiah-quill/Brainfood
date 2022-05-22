# Brainfood

## Description

AI powered recipe suggestions based on ingredients you have around the house. See deployed application [here](https://brainfoodai.netlify.app/).

## Installation

If you are setting up this application to run locally, you must sign up for a free account with OpenAI and include the secret API key in an environment file. Navigate to the root of this project and create an environment file:

```
% touch .env.local
```

In .env.local, add an environment variable set to the API key you will find in your OpenAI account:

```
REACT_APP_OPENAI_SECRET=[API_KEY_HERE]
```

Finally you must install all dependancies and start your local server:

```
% npm i
% npm start
```
