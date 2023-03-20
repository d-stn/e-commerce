import axios from "axios";
const baseUrl = "http://localhost:3003/api/order/create-payment-intent"

const createPaymentIntent = async (orderObject) => {
    const res = await axios.post(baseUrl, { items: orderObject })
    return res.data
}

export default {
    createPaymentIntent
}