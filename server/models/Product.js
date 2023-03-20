const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String },
    image: { type: String, required: true },
    categories: { type: [String], required: true, index: true },
    tags: [String],
    specs: Object,
    stock: { type: Number, required: true, index: true },
    price: { type: Number, required: true },
})

productSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model("Product", productSchema);