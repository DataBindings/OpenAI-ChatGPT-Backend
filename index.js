const express = require('express');
const multer = require('multer');

// Custom Functions
const { chatGPT } = require('./OpenAI/ChatGPT.js');
const { ValidateDescription } = require('./Helpers/Validation.js');

// Multer Config
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

// Express Config
const app = express();
const port = 3001

app.post('/openai/chatgpt', upload.none(), async (req, res) => {

  if (req.body === undefined) {
    res.send('Error: ChatGPT required body');
    return;
  }

  const description = ValidateDescription(req.body.description);

  if (description.error) {
    res.send(description.errorDescription);
    return;
  }

  const maxTokens = req.body.maxTokens || undefined;
  const temperature = req.body.temperature || undefined;
  const apiData = await chatGPT(description.validDescription, maxTokens, temperature);

  res.send(apiData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});