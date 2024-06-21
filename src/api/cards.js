const { Router } = require('express');

const CardCatecories = require('../models/CardCategories');
const Users = require('../models/User');

const router = Router();

// Add card to users cards
router.post('/add', async (req, res, next) => {
  try {
    const user = await Users.findById(req.query._id);

    const cardData = req.body;

    // Check if the card already exists
    const cardExists = user.cards.some(
      (card) =>
        card.english.toLowerCase() === cardData.english.toLowerCase() &&
        card.portugueseBrazil.toLowerCase() ===
          cardData.portugueseBrazil.toLowerCase(),
    );

    if (cardExists) {
      return res.status(400).json({ message: 'Card already exists' });
    }

    user.cards.push(cardData);

    const updatedUser = user.save();

    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

// Get all users cards
router.get('/usersCards', async (req, res, next) => {
  try {
    const user = await Users.findById(req.query._id);

    const cards = user.cards;
    const cardData = cards.map((card) => ({
      english: card.english,
      portugueseBrazil: card.portugueseBrazil,
    }));

    res.json(cardData);
  } catch (error) {
    next(error);
  }
});

// Get card categories to display on 'browse stacks' section
router.get('/', async (req, res, next) => {
  try {
    const stacks = await CardCatecories.find();

    const data = stacks.map((stack) => ({
      _id: stack._id,
      category: stack.category,
      thumbnail: stack.thumbnail,
    }));
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Get data to display flashcards
router.get('/getStack', async (req, res, next) => {
  try {
    const stack = await CardCatecories.findOne({ _id: req.query._id });
    res.json(stack);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
