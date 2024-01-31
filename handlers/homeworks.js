const {Book} = require('../models/book');

function createBook(title, author, publishDate, genre) {
    const book = new Book({ title, author, publishDate, genre });
    return book.save();
}

module.exports = {
    createBook
};
