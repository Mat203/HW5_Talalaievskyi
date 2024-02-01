const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

router.get('/new', bookController.getNewBookPage);
router.post('/books', (req, res) => {
    console.log('POST / route called'); 
    bookController.createBook(req, res);
});
router.get('/:id', bookController.getBookById);

module.exports = router;
