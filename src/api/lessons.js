const { Router } = require('express');

const Lessons = require('../models/Lesson');

const router = Router();

// get all lessons metadata (id, thumb and title) to display on thumbnails.
router.get('/', async (req, res, next) => {
  try {
    const lessons = await Lessons.find();

    const data = lessons.map((lesson) => ({
      _id: lesson._id,
      title: lesson.title,
      thumbnail: lesson.thumbnail,
    }));
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Get data to display cards
router.get('/getLesson', async (req, res, next) => {
  try {
    const lesson = await Lessons.findOne({ _id: req.query._id });
    res.json(lesson);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
