const { Router } = require('express');

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

router.post('/login', async (req, res, next) => {});

module.exports = router;
