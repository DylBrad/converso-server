const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const lessons = require('./api/lessons');
const user = require('./api/user');

const app = express();

const uri = process.env.MONGO_ATLAS_URI;

// connect mongoAtlas
async function main() {
  await mongoose.connect(uri);
}
main().catch((err) => console.log(err));

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    // Only requests coming from here can reach the backend
    origin: process.env.LOCAL_ORIGIN,
    // origin: process.env.GIT_ORIGIN,
  }),
);
app.use(express.json());

// HELLO WORLD!
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// lesson routes
app.use('/api/lessons', lessons);

// user router
app.use('/api/user', user);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Converso: listening on port ${process.env.PORT}`);
});
