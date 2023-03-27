const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')

const productRouter = require('./controllers/products');
const orderRouter = require('./controllers/order');

const mongoose = require("mongoose");

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error.message)
    })

app.use(cors())
app.use(express.json())
app.use("/api/products", productRouter)
app.use("/api/order", orderRouter)

module.exports = app;