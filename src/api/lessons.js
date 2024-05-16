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

module.exports = router;
