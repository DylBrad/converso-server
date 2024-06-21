const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  english: String,
  portugueseBrazil: String,
});

const cardCategoriesSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  thumbnail: String,
  cards: [cardSchema],
});

const CardsCategories = mongoose.model('CardsCategories', cardCategoriesSchema);

module.exports = CardsCategories;
