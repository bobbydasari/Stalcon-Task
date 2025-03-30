const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookcontrollers');

// Define routes
router.post('/books', bookController.addBook);
router.get('/books', bookController.getBooks);
router.get('/books/:id', bookController.getBookById);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
