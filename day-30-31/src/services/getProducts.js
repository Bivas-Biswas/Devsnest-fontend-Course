import axios from "axios";

export const getProducts = async () => {
    try {
        const res = await axios.get("https://fakestoreapi.com/products")
        return res.data
    } catch (e) {
        return e.message
    }
}