const Book = require('../models/bookModel');

// Add a new book
exports.addBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all books
exports.getBooks = async (req, res) => {
    const books = await Book.find();
    res.status(200).json(books);
};

// Get book by ID
exports.getBookById = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
};

// Update book by ID
exports.updateBook = async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
};

// Delete book by ID
exports.deleteBook = async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.status(204).send();
};
