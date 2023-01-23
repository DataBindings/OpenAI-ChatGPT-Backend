const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');

dotenv.config();

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey:       process.env.OPENAI_API_TOKEN,
});

const openai = new OpenAIApi(configuration);

exports.openai = openai;