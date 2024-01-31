const mongoose = require("mongoose");
const Schema =  require("mongoose").Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    publishDate: Date,
    genre: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = {
    bookSchema,
    Book,
};