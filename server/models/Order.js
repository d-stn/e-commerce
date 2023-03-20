const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    items: [{
        id: mongoose.Schema.Types.ObjectId,
        qty: Number,
        priceAtOrder: Number,   // price at the time of order can be different than usual price (e.g. on sale)
    }],
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