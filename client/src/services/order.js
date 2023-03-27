import axios from "axios";
const baseUrl = "https://e-commerce-server-jivi.onrender.com/api/order"

const createPaymentIntent = async (order) => {
    const res = await axios.post(`${baseUrl}/create-payment-intent`, { items: order })
    return res.data
}

const createOrder = async (order) => {
    const res = await axios.post(`${baseUrl}/create-order`, order)
    return res.data
}

export default {
    createPaymentIntent,
    createOrder
}