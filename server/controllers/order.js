const Order = require('../models/Order');
const Product = require('../models/Product');
const config = require('../utils/config')
const orderRouter = require("express").Router()
const stripe = require("stripe")(config.STRIPE_SECRET_KEY)

orderRouter.post('/create-payment-intent', async (req, res) => {
    const { items } = req.body;

    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    const calculateOrderAmount = async (itemsFromClient) => {
        let totalPrice = 0;

        for (let i = 0; i < itemsFromClient.length; i++) {
            const tempItem = await Product.findById(itemsFromClient[i].id)
            if (tempItem.stock < itemsFromClient[i].qty) {
                throw new Error(`Order quantity of item "${tempItem.title}" is more than we currently have in stock!`)
            }
            totalPrice += tempItem.price * itemsFromClient[i].qty;
        }

        return totalPrice;
    };

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: await calculateOrderAmount(items),
            currency: "eur",
            automatic_payment_methods: {
                // this enables us to add and remove payment methods from the stripe dashboard, instead of changing code
                enabled: true
            }
        })

        res.status(200).send({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        console.log(err);
        res.status(400).send({ error: err.message })
    }
});

orderRouter.post("/create-order", async (req, res) => {
    if (!req.body.items || !req.body.address) {
        res.send(400).end()
    }

    try {
        const { address, items, name, phone, totalPrice } = req.body

        const savedOrder = await new Order({ address, items, name, phone, totalPrice }).save()

        // extract id of each product in "ids" array
        const ids = savedOrder.items.map(item => item.id)

        // Loop through "ids" and decrease the quantity of each product in DB by the amount that was ordered
        Product.bulkWrite(ids.map(current => {
            return {
                updateOne: { "filter": { _id: current }, "update": { $inc: { "stock": -savedOrder.items.find(e => e.id === current).qty } } }
            }
        }))

        res.status(201).end()

    } catch (err) {
        console.log(err);
        res.status(400).send({ error: err.message })
    }
})

module.exports = orderRouter;