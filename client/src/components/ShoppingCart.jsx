import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeFromCart } from "../reducers/cartReducer"
import { displayPrice } from "../utils/helperFunctions"

const ShoppingCart = ({ setOpen }) => {
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    return (
        <div className="shopping-cart">
            {items.length > 0 ?
                <div>
                    {items.map(item => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>{displayPrice(item.price)}</p>
                            <p>number of items: {item.qty}</p>
                            <button
                                onClick={() => dispatch(removeFromCart({ id: item.id }))}
                            >remove</button>
                            <hr />
                        </div>
                    ))}
                    <Link to="/proceed" onClick={() => setOpen(false)}>
                        <button>Checkout</button>
                    </Link>
                </div>
                :
                <p>Your cart is empty</p>
            }


        </div>
    )
}

export default ShoppingCart