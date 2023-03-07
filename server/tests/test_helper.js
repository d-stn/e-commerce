const Product = require('../models/product');

const lorem50 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus dolor sapien, id rutrum ante elementum in. Ut aliquet, eros id lobortis bibendum, nulla augue sodales enim, et tristique lorem tortor ac enim. Proin magna felis, lobortis a ante at, hendrerit hendrerit sapien. Nulla tincidunt ipsum non felis dapibus, eu."

const initialProducts = [
    {
        title: "Grey T-Shirt",
        desc: lorem50,
        image: "grey_tshirt_male",
        categories: ["men", "t-shirt", "plain"],
        sizes: ["M", "L", "XL"],
        color: ["grey"],
        stock: 12,
        price: 19.99
    },
    {
        title: "White Hoodie",
        desc: lorem50,
        image: "white_hoodie_male_front",
        categories: ["men", "hoodie", "plain"],
        sizes: ["M", "L"],
        color: ["white"],
        stock: 12,
        price: 39.99
    },
    {
        title: "Red T-Shirt",
        desc: lorem50,
        image: "red_tshirt_male",
        categories: ["unisex", "tshirt", "plain"],
        sizes: ["S", "M", "L"],
        color: ["red"],
        stock: 12,
        price: 19.99
    },
    {
        title: "Black Hoodie",
        desc: lorem50,
        image: "black_hoodie_male",
        categories: ["men", "hoodie", "plain"],
        sizes: ["S", "M", "L", "XL"],
        color: ["black"],
        stock: 12,
        price: 59.99
    }
]

// this functing should return what is currently in the database
const getProductsInDb = async () => {
    // get all blogs in db and store then in variable
    const products = await Product.find({});

    // return an array consisting of blogs in the correct format
    return products.map(p => p.toJSON());
}

const getNonExistingId = async () => {
    const product = new Product({ title: "willremovethissoon", image: "foo", color: ["foo"], stock: 1, price: 1.99 })
    await product.save();
    await product.remove();

    return product._id.toString();
}

module.exports = {
    initialProducts,
    getProductsInDb,
    getNonExistingId
}