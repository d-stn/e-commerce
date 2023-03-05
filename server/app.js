const config = require('./utils/config')
const express = require('express')
const app = express()
const mongoose = require("mongoose");

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error.message)
    })

app.use(express.json())

module.exports = app;