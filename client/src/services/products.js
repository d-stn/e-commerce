import axios from "axios";
const baseUrl = "http://localhost:3003/api/products"

const getCategory = async (category) => {
    const res = await axios.get(`${baseUrl}/${category}`)
    return res.data;
}

const getProduct = async (id) => {
    try {
        const res = await axios.get(`${baseUrl}/item/${id}`)
        return res.data
    } catch (error) {
        console.error("An unexpected error occurred", error);
    }
}

export default {
    getCategory,
    getProduct
}