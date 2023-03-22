import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeFromCart } from "../reducers/cartReducer"
import { displayPrice } from "../utils/helperFunctions"
import { TransformedImage } from "./Image"

const ShoppingCart = () => {
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    return (
        <div className="shopping-cart">
            {items.length > 0 ?
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {items.map(item => (
                        <div className="container" key={item.id} >
                            <TransformedImage
                                publicId={item.image}
                                width={160}
                                height={120}
                            />
                            <div className="item-details">
                                <div style={{ display: "flex" }}>
                                    <p>{item.title}</p>
                                    <button
                                        onClick={() => dispatch(removeFromCart({ id: item.id }))}
                                    >X</button>
                                </div>
                                <p>{displayPrice(item.price)} x {item.qty}</p>
                            </div>
                        </div>
                    ))}
                    <div className="bottom-row">
                        <span>
                            Total: {displayPrice(items.reduce((a, b) => a + (b.qty * b.price), 0))}
                        </span>
                        <Link to="/checkout" >
                            <button>Checkout</button>
                        </Link>
                    </div>
                </div>
                :
                <p>Your cart is empty</p>
            }
        </div>
    )
}

export default ShoppingCart