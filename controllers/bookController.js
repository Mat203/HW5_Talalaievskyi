const { Book } = require('../models/book');

async function getNewBookPage(req, res) {
    try {
        res.render('newBook');
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createBook(req, res) {
    try {
        const book = new Book({
            title: req.body.title,
            author: req.body.author,
            publishDate: req.body.publishDate,
            genre: req.body.genre
        });
        await book.save();
        console.log('Book created successfully:', book);
        res.redirect('/'); 
    } catch (error) {
        console.log('Error occurred while creating book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getBookById(req, res) {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).send('The book with the given ID was not found.');
        res.render('displayBook', { book: book });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    getNewBookPage,
    createBook,
    getBookById
};

