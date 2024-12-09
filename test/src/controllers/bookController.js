const Book = require('../models/book');

/**
 * Creates a new book in the database.
 * @param {Object} req - The request object containing the book details in the body.
 * @param {Object} res - The response object to send the result back to the client.
 * @returns {Object} The saved book in JSON format.
 */
exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        const savedBook = await book.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Retrieves all books from the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object to send the list of books.
 * @returns {Array} An array of all books in JSON format.
 */
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Retrieves a book by its ID from the database.
 * @param {Object} req - The request object containing the book ID as a parameter.
 * @param {Object} res - The response object to send the book data.
 * @returns {Object} The book data in JSON format, or an error message if not found.
 */
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Updates a book by its ID in the database.
 * @param {Object} req - The request object containing the book ID as a parameter and the updated data in the body.
 * @param {Object} res - The response object to send the updated book data.
 * @returns {Object} The updated book in JSON format, or an error message if not found.
 */
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Deletes a book by its ID from the database.
 * @param {Object} req - The request object containing the book ID as a parameter.
 * @param {Object} res - The response object to send a success or error message.
 * @returns {Object} A success message if the book is deleted, or an error message if not found.
 */
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
