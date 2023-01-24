const { openai } = require('./auth.js');

/**
 * Generates a ChatGPT response using OpenAI
 * @author Jeremie Pedden <jeremiepedden@gmail.com>
 * @param  {String} description     - The description to generate ChatGPT response from
 * @param  {Int}    maxTokens       - The max number of tokens to generate ChatGPT response from
 * @param  {Float}  temperature     - The sampling temperature to generate ChatGPT response from. ( Higher values means the model will take more risks )
 * @return {Array}                  - The generated ChatGPT response or errors
 */
const chatGPT = async ( description, maxTokens=1000, temperature=0.9 ) => {

  if (typeof description !== 'string') {
    return 'Error: ChatGPT description must be of string type';
  }

  if (description === '') {
    return 'Error: ChatGPT description is required';
  }

  if (description.trim() === '') {
    return 'Error: ChatGPT description is blank';
  }

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: description,
      max_tokens: parseInt(maxTokens),
      temperature: parseFloat(temperature)
    });

    return response.data.choices;
  }
  catch(error) {
    return error
  }
}

exports.chatGPT = chatGPT;