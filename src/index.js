const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

console.log(process.env);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Converso: listening on port ${process.env.PORT}`);
});
