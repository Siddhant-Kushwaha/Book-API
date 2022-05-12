const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    imageurl: {
        type: String,
    },
    author: {
        type: String,
        required: true,
    },
    pages: {
        type: Number,
    },
    price: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model("Book", BookSchema)
