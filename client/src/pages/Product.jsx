import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import productService from "../services/products"

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        productService
            .getProduct(id)
            .then(res => setProduct(res))
    }, [])

    return (
        <div>
            {product && (
                <div>
                    <h1>{product.title}</h1>
                    YOU ARE ON PRODUCT PAGE
                </div>
            )}
        </div>
    )
}

export default Product