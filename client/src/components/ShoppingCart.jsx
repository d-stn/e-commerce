import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../reducers/cartReducer"
import ProductDisplay from "./ProductDisplay"

const ShoppingCart = () => {
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    return (
        <div className="shopping-cart">
            {items.map(item => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>€{item.price}</p>
                    <p>number of items: {item.qty}</p>
                    <button
                        onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >remove</button>
                    <hr />
                </div>
            ))}
            <button>Checkout</button>
        </div>
    )
}

export default ShoppingCart