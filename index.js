const express = require('express');
const multer = require('multer');

// Custom Functions
const { chatGPT } = require('./OpenAI/ChatGPT.js');

// Multer Config
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

// Express Config
const app = express();
const port = 3001

app.post('/openai/chatgpt', upload.none(), async (req, res) => {

  if (req.body === undefined) {
    res.send('Error: ChatGPT route requires a body');
    return;
  }

  const description = req.body.description;
  const maxTokens = req.body.maxTokens || undefined;
  const temperature = req.body.temperature || undefined;
  const apiData = await chatGPT(description, maxTokens, temperature);

  res.send(apiData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});