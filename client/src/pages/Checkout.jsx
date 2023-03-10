import { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import orderService from "../services/order"
import CheckoutForm from "../components/CheckoutForm"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const stripePromise = loadStripe("pk_test_51MimZFJrvCD8ptIuFKxFW1lwgtrRG17zgGl0auVPkoFYE1lou7uCJytPgHaeGl5kF6D10uC39jroHWUhBQVOIeVV00MQewnjtY")

const Checkout = () => {
    const items = useSelector(state => state.cart.items)
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await orderService.makeOrder(items)
                console.log("I'm sending these items to server:", items);
                setClientSecret(res.clientSecret)
            }
            catch (err) {
                console.log(err);
            }
        }
        makeRequest()
    }, [])

    const appearance = {
        theme: "stripe"
    }

    const options = {
        clientSecret,
        appearance
    }

    return (
        <div>
            {items.length > 0 ?
                clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )
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

export default Checkout