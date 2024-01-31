const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

router.get('/new', bookController.getNewBookPage);

module.exports = router;
