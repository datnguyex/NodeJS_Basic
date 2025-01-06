const express = require('express');
const router = express.Router();
const SiteController = require('../app/controllers/SiteControlller');

router.get('/', SiteController.index);
router.get('/search', SiteController.search);

module.exports = router;
