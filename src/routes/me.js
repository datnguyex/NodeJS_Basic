const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/courseControlller');

router.get('/trash/courses', CourseController.trashCourses);

module.exports = router;
