const mongoose = require('mongoose');

const lessonCardsSchema = new mongoose.Schema({
  english: String,
  portugueseBrazil: String,
});

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: String,
  graphics: String,
  category: String,
  difficulty: String,
  cards: [lessonCardsSchema],
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
