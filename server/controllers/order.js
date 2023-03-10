const Product = require('../models/Product');
const config = require('../utils/config')
const orderRouter = require("express").Router()
const stripe = require("stripe")(config.STRIPE_SECRET_KEY)

orderRouter.post('/create-payment-intent', async (req, res) => {
    const { items } = req.body;
    const calculateOrderAmount = async (itemsFromClient) => {
        // Calculate the order total on the server to prevent
        // people from directly manipulating the amount on the client

        let totalPrice = 0;

        for (let i = 0; i < itemsFromClient.length; i++) {
            const tempItem = await Product.findById(itemsFromClient[i].id)
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
    } catch (error) {
        console.log(error);
    }
});

module.exports = orderRouter;