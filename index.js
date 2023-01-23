const express = require('express');
const multer = require('multer');

// Multer Config
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

// Express Config
const app = express();
const port = 3001

app.post('/openai/chatgpt', upload.none(), async (req, res) => {

  if (req.body === undefined) {
    res.send('Error no body');
    return;
  }

})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});