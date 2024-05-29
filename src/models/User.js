const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  english: String,
  portugueseBrazil: String,
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  cards: [cardSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
