import axios from "axios";
const baseUrl = "https://e-commerce-server-jivi.onrender.com/api/products"


const getCategory = async (category) => {
    try {
        const res = await axios.get(`${baseUrl}/${category}`)
        return res.data;
    } catch (err) {
        console.error("Error fetching category:", err);
    }
}

const getProduct = async (id) => {
    try {
        const res = await axios.get(`${baseUrl}/item/${id}`)
        return res.data
    } catch (err) {
        console.error("Error fetching product", err);
    }
}

export default {
    getCategory,
    getProduct
}