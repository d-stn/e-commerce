import { AdvancedImage } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"
import { fill } from "@cloudinary/url-gen/actions/resize"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { addToCart } from "../reducers/cartReducer"
import productService from "../services/products"
import { displayPrice } from "../utils/helperFunctions"

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        productService
            .getProduct(id)
            .then(res => setProduct(res))
    }, [id])

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'ddq7og6ff'
        }
    });

    return (
        <div>
            {product && (
                <div className="product-container">
                    <AdvancedImage cldImg={cld.image(product.image)} />
                    <div className="right-side">
                        <h1>{product.title}</h1>
                        <span>{displayPrice(product.price)}</span>
                        <span>{product.desc}</span>
                        <button
                            onClick={() => dispatch(addToCart({ ...product, qty: 1 }))}
                        >add to cart</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Product