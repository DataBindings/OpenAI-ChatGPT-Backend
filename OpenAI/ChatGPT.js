const { openai } = require('./auth.js');

/**
 * Generates a ChatGPT response using OpenAI
 * @author Jeremie Pedden <jeremiepedden@gmail.com>
 * @param  {String} description     - The description to generate ChatGPT response from
 * @return {Array}                  - The generated ChatGPT response or errors
 */
const chatGPT = async ( description ) => {

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
      prompt: "Hello world",
    });

    return response.data.data;
  }
  catch(error) {
    return error
  }
}

exports.chatGPT = chatGPT;