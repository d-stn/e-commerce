const productRouter = require("express").Router();
const Product = require('../models/Product');

productRouter.get("/", async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

productRouter.get("/category/:category", async (req, res) => {
    const products = await Product.find({ categories: req.params.category, stock: { $gt: 0 } })

    res.json(products)
})

productRouter.get("/search/:query/", async (req, res) => {
    const query = req.params.query;

    const products = await Product
        .find({
            $or: [
                { categories: { $regex: query, $options: 'i' } },
                { title: { $regex: query, $options: 'i' } }
            ]
        })
        .limit(5)

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