const productRouter = require("express").Router();
const Product = require('../models/Product');

productRouter.get("/", async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

productRouter.get("/:category", async (req, res) => {
    const products = await Product.find({ categories: req.params.category, stock: { $gt: 0 } })

    res.json(products)
})

productRouter.get("/item/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(400).end()
    }
})

module.exports = productRouter;