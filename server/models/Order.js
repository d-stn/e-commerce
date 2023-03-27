const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: { type: String, reqired: true },
    phone: { type: String, reqired: true },
    address: { type: Object, required: true },
    items: [Object],
    totalPrice: Number,
    status: {
        type: String,
        enum: ["pending", "completed", "refunded"],
        default: "pending"
    }
}, { timestamps: { createdAt: true, updatedAt: false } })

orderSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model("Order", orderSchema);