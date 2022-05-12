const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bookRoute = require("./routes/books")
const authRoute = require("./routes/auth")
const dotenv = require("dotenv")
const mongoSanitize = require("express-mongo-sanitize")
const helmet = require("helmet")

app.use(express.json())
app.use(
    mongoSanitize({
        replaceWith: "_",
    })
)
app.use(helmet())
dotenv.config()

mongoose
    .connect("mongodb://localhost:27017/niblindb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database Connected")
    })
    .catch((err) => {
        console.log("Error : ", err)
    })

app.use("/api/books", bookRoute)
app.use("/api/users/auth/", authRoute)

app.listen(3000, () => {
    console.log("Server Started")
})
