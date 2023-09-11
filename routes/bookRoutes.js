const express = require("express")
const { getAllBooks, getById, addBook, updateBook, deleteBook } = require("../controller/booksController")

const router = express.Router()


router.get("/", getAllBooks)
router.get('/:id', getById)
router.post("/add", addBook)
router.put("/update/:id", updateBook)
router.delete("/delete/:id", deleteBook)


module.exports = router  