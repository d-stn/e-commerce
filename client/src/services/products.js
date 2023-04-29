import axios from "axios";
const baseUrl = "https://e-commerce-production-dadd.up.railway.app/api/products"

const getCategory = async (category) => {
    try {
        const res = await axios.get(`${baseUrl}/category/${category}`)
        return res.data;
    } catch (err) {
        console.error("Error fetching category:", err);
    }
}

const getSearch = async (query) => {
    try {
        const res = await axios.get(`${baseUrl}/search/${query}`)
        return res.data;
    } catch (err) {
        console.error("Error fetching search results:", err);
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
    getProduct,
    getSearch
}