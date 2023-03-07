const productRouter = require("express").Router();
const Product = require('../models/Product');

productRouter.get("/", async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

productRouter.get("/:category", async (req, res) => {
    const products = await Product.find({ categories: req.params.category })

    res.json(products)
})

productRouter.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    }
    else {
        res.status(404).end();
    }
})

productRouter.post("/", async (req, res) => {
    if (!req.body) {
        res.status(400).end()
    }
    const { categories, color, image, price, sizes, stock, title, desc } = req.body;

    const product = new Product({
        categories,
        color,
        image,
        price,
        sizes,
        stock,
        title,
        desc
    })

    const savedProduct = await product.save()

    res
        .status(201) // if we dont specity, status code is 200 - OK and not 201 - created
        .json(savedProduct)
})

productRouter.put("/:id", async (req, res) => {
    const product = {
        stock: req.body.stock
    }

    const updated = await Product
        .findByIdAndUpdate(req.params.id, product, { new: true })
    // { new: true } means that the returned object is the updated product
    // if not specified, it will return the product before it was updated

    res.json(updated)
})

module.exports = productRouter;