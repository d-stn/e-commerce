import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { displayPrice } from "../utils/helperFunctions"

const Proceed = () => {
    const items = useSelector(state => state.cart.items)

    return (
        <div>
            {items.length > 0 ?
                <div>
                    These are your items:
                    {items.map(item => (
                        <div key={item.id}>
                            <div>{item.title}</div>
                            <div>price: {displayPrice(item.price)}</div>
                            <div>quantity: {item.qty}</div>
                        </div>
                    ))}
                    Total price: {displayPrice(items.reduce((acc, curr) => acc + (curr.price * curr.qty), 0))}
                    <br />
                    <Link to="/order">
                        <button>Proceed</button>
                    </Link>
                </div>
                :
                <div>Your shopping cart is empty. To add products in your cart, please
                    {" " /* this is needed to have space between "please" and "browse" */}
                    <Link to="/" style={{
                        color: "lightblue"
                    }}>
                        browse the store
                    </Link>
                </div>
            }

        </div>
    )
}

export default Proceed