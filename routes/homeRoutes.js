const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');
const cookieHelper = require('../helpers/cookie');

router.get('/new', bookController.getNewBookPage);
router.post('/books', (req, res) => {
    console.log('POST / route called'); 
    bookController.createBook(req, res);
});
router.get('/:id', bookController.getBookById);
router.get('/', bookController.getAllBooks);
router.get('/setCookie', cookieHelper.setCookie);
//http://localhost:3400/setCookie?name=test&value=testValue
//http://localhost:3400/getCookie?name=test
router.get('/getCookie', cookieHelper.getCookie);
//http://localhost:3400/setHeader
router.get('/setHeader', (req, res) => {
    res.set({
        'Content-Type': 'text/plain',
        'Custom-Header': 'Hello, Custom Header!'
    });
    res.send('setHeader');
 });
 //http://localhost:3400/getHeader
 router.get('/getHeader', (req, res) => {
    const customHeaderValue = req.get('Custom-Header') || 'Header not set';
    res.send('Custom Header Value:' +  customHeaderValue);
 });
 
module.exports = router;
