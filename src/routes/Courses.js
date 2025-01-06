const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/courseControlller');

router.get('/:create', CourseController.create);
router.post('/:store', CourseController.store);
router.get('/:id/edit', CourseController.edit);
router.put('/:id', CourseController.update);
router.get('/:id/delete', CourseController.delete);
router.get('/:slug', CourseController.show);
router.get('/:id/restore', CourseController.restore);
router.get('/:id/deleteForce', CourseController.deleteForce);

module.exports = router;
