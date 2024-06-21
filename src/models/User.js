const mongoose = require('mongoose');

const UserCardSchema = new mongoose.Schema({
  english: String,
  portugueseBrazil: String,
  progress: String,
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
  cards: [UserCardSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
