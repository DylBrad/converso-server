const { Router } = require('express');

const Lessons = require('../models/Lesson');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const lessons = await Lessons.find();
    res.json(lessons);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
