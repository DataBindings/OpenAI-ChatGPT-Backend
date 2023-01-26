const { openai } = require('./auth.js');
const { ValidateDescription } = require('../helpers/validation.js');

/**
 * Generates a ChatGPT response using OpenAI
 * @author Jeremie Pedden <jeremiepedden@gmail.com>
 * @param  {String} description     - The description to generate ChatGPT response from
 * @param  {Int}    maxTokens       - The max number of tokens to generate ChatGPT response from
 * @param  {Float}  temperature     - The sampling temperature to generate ChatGPT response from. ( Higher values means the model will take more risks )
 * @return {Array}                  - The generated ChatGPT response or errors
 */
const chatGPT = async ( description, maxTokens=1000, temperature=0.9 ) => {
  const isValidDescription = ValidateDescription(description);

  if (isValidDescription.error) {
    return isValidDescription;
  }

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: isValidDescription.validDescription,
      max_tokens: parseInt(maxTokens),
      temperature: parseFloat(temperature)
    });

    return {
      status: response.status,
      response: response.data.choices,
      useage: response.data.usage,
    }
  }
  catch(error) {
    return error
  }
}

exports.chatGPT = chatGPT;