import axios from "axios";
const baseUrl = "http://localhost:3003/api/order"

const createPaymentIntent = async (order) => {
    const res = await axios.post(`${baseUrl}/create-payment-intent`, { items: order })
    return res.data
}

const createOrder = async (order) => {
    const res = await axios.post(`${baseUrl}/create-order`, order)
}

export default {
    createPaymentIntent,
    createOrder
}