const Product = require('../models/product');

const initialProducts = [
    {
        title: "Mouse",
        desc: "Lorem ipsum",
        image: "mouse",
        categories: ["mouse"],
        tags: [""],
        specs: {
            key: "value"
        },
        stock: 12,
        price: 1999
    },
    {
        title: "Headphones",
        desc: "Lorem ipsum",
        image: "headphones",
        categories: ["headphones"],
        tags: [""],
        specs: {
            key: "value"
        },
        stock: 12,
        price: 1999
    },
    {
        title: "Monitor",
        desc: "Lorem ipsum",
        image: "monitor",
        categories: ["monitor"],
        tags: [""],
        specs: {
            key: "value"
        },
        stock: 12,
        price: 1999
    },
]

// this functing should return what is currently in the database
const getProductsInDb = async () => {
    // get all blogs in db and store then in variable
    const products = await Product.find({});

    // return an array consisting of blogs in the correct format
    return products.map(p => p.toJSON());
}

const getNonExistingId = async () => {
    const product = new Product({ title: "willremovethissoon", image: "foo", categories: ["foo"], stock: 1, price: 199 })
    await product.save();
    await product.remove();

    return product._id.toString();
}

module.exports = {
    initialProducts,
    getProductsInDb,
    getNonExistingId
}