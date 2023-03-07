import axios from "axios";
const baseUrl = "http://localhost:3003/api/products"

const getCategory = async (category) => {
    const res = await axios.get(`${baseUrl}/${category}`)
    return res.data;
}

const getProduct = async (id) => {
    const res = await axios.get(`${baseUrl}/item/${id}`)
    return res.data
}

export default {
    getCategory,
    getProduct
}