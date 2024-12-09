const mongoose = require('mongoose');

/**
 * Mongoose schema and model for the Book entity.
 * 
 * @module models/book
 */

/**
 * Schema representing a book in the digital library.
 * @typedef {Object} BookSchema
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {string} genre - The genre of the book.
 * @property {boolean} isFiction - A boolean value indicating if the book is fiction.
 */
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },  // Title of the book
    author: { type: String, required: true },  // Author of the book
    genre: { type: String, required: true },  // Genre of the book
    isFiction: { type: Boolean, required: true }  // Whether the book is fiction or not
});

/**
 * Book model based on the bookSchema.
 * @type {mongoose.Model<BookSchema>}
 * @description The Book model allows interaction with the `books` collection in the database.
 */
const Book = mongoose.model('Book', bookSchema);  // Create the Book model

module.exports = Book;
