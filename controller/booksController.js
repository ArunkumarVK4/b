const express = require("express");
const Books = require("../model/booksModel");
const app = express();

// Get All Books
exports.getAllBooks = async (req, res) => {
  const book = await Books.find();

  if (book) {
    res.status(200).json({
      book,
    });
  } else {
    res.status(200).json({ message: "No Product Found" });
  }
};

// Get Single Book

exports.getById = async (req, res) => {
  const id = req.params.id;
  const book = await Books.findById(id);
  if (book) {
    res.status(200).json({
      book,
    });
  } else {
    res.status(404).json({
      message: "No Book Found",
    });
  }
};

// // Add a Book
exports.addBook = async (req, res) => {
  const { name, author, description, price, available, image } = req.body;

  const book = new Books({
    name,
    author,
    description,
    price,
    available,
    image,
  });

  await book
    .save()
    .then(() => {
      res.status(200).json({
        message: book,
      });
    })
    .catch(() => {
      res.status(404).json({
        message: "Unable to Add Book",
      });
    });
};

// // Update Book
exports.updateBook = async (req, res) => {
  const id = req.params.id;

  const { name, author, description, available, price, image } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });

    if (!updatedBook) {
      return res.status(404).json({
        message: "Book not found or cannot be updated.",
      });
    }

    res.status(200).json({
      message: "Book updated successfully.",
      updatedBook,
    });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({
      message: "An error occurred while updating the book.",
      error: error.message,
    });
  }
};

// // Delete Book

exports.deleteBook = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Books.findByIdAndRemove(id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found.",
      });
    }
    res.status(200).json({
      message: "Book Deleted Successfully",
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
