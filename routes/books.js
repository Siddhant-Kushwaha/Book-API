const router = require("express").Router()
const Book = require("../models/Book")
const { verifyToken } = require("./verify")

// create book
router.post("/", verifyToken, async (req, res) => {
    try {
        const newBook = new Book(req.body)
        const savedBook = await newBook.save()
        res.status(200).json(savedBook)
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        })
    }
})

// get single book
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        res.status(200).json(book)
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        })
    }
})

// delete a book
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "Book Deleted Successfully!",
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            error: err.message,
        })
    }
})

// update a book
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(200).json(updatedBook)
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        })
    }
})

// get all books
router.get("/", verifyToken, async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        })
    }
})

module.exports = router
