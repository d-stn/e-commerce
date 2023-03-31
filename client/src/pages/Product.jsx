import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Image from "../components/Image"
import { addToCart, buyNow } from "../reducers/cartReducer"
import productService from "../services/products"
import { displayPrice } from "../utils/helperFunctions"

const Product = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        productService
            .getProduct(id)
            .then(res => setProduct(res))
    }, [id])

    return (
        <div>
            {product && (
                <div className="product-container">
                    <div className="upper-part">
                        <Image publicId={product.image} />
                        <div className="right-side">
                            <h1>{product.title}</h1>
                            <div className="desc">{product.desc}</div>
                            <hr />
                            <div className="price">{displayPrice(product.price)}</div>
                            <hr />
                            <div className="qty-container">
                                <button
                                    onClick={() => {
                                        if (qty === 1) return
                                        setQty(qty - 1)
                                    }}
                                    className="minus">
                                    -
                                </button>
                                <div className="qty-count">{qty}</div>
                                <button
                                    onClick={() => {
                                        if (qty >= product.stock) return
                                        setQty(qty + 1)
                                    }}
                                    className="plus">
                                    +
                                </button>
                                {product.stock < 13 &&
                                    <div className="few-items-left">
                                        <div>Only <span>{product.stock} items</span> Left!</div>
                                        <div>Don't miss it</div>
                                    </div>
                                }
                            </div>
                            <div className="buy-buttons">
                                <button
                                    onClick={() => {
                                        dispatch(buyNow({ ...product, qty: qty }))
                                        navigate("/checkout/buy_now")
                                    }}
                                >Buy Now</button>
                                <button
                                    onClick={() => dispatch(addToCart({ ...product, qty: qty }))}
                                >Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="lower-part">
                        <h2>All specifications</h2>
                        <div className="tables">
                            <table>
                                <tbody>{
                                    // || {} is here so i don't get "Cannot convert undefined or null to object" error
                                    Object.keys(product.specs || {})
                                        .slice(0, Object.keys(product.specs || {}).length / 2)
                                        .map(key => (
                                            <tr key={key}>
                                                <th>{key}</th>
                                                <td>{product.specs[key]}</td>
                                            </tr>
                                        ))
                                }</tbody>
                            </table>
                            <table>
                                <tbody>{
                                    // || {} is here so i don't get "Cannot convert undefined or null to object" error
                                    Object.keys(product.specs || {})
                                        .slice(Object.keys(product.specs || {}).length / 2, Object.keys(product.specs || {}).length)
                                        .map(key => (
                                            <tr key={key}>
                                                <th>{key}</th>
                                                <td>{product.specs[key]}</td>
                                            </tr>
                                        ))
                                }</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Product