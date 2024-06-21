const { Router } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const router = Router();

router.post('/create', async (req, res, next) => {
  try {
    const user = new User(req.body);

    const createdUser = await user.save();

    res.json(createdUser);
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  try {
    console.log('USER:', user);
    if (user) {
      if (password === user.password) {
        const token = jwt.sign({ userId: user._id }, 'your secret key', {
          expiresIn: '1d',
        });
        res.status(201).json({ token });
      } else {
        res.status(400).send({ error: 'Whoops! Password incorrect.' });
      }
    } else {
      res.status(400).send({ error: "Whoops! User does'nt exist." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Server Error' });
  }
});

router.delete('/deleteAccount', async (req, res, next) => {
  try {
    const userId = req.body;
    const deletedUser = await User.findByIdAndDelete(userId);
    res.json(deletedUser);
  } catch (error) {
    console.error('there was a problem deleting user.', error.message);
  }
});

module.exports = router;
