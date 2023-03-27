import { Elements, useStripe } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearCart } from "../reducers/cartReducer"

import orderService from "../services/order"

const stripePromise = loadStripe("pk_test_51MimZFJrvCD8ptIuFKxFW1lwgtrRG17zgGl0auVPkoFYE1lou7uCJytPgHaeGl5kF6D10uC39jroHWUhBQVOIeVV00MQewnjtY")

const Success = () => {
    return (
        <Elements stripe={stripePromise}>
            <SuccessElement />
        </Elements>
    )
}

const SuccessElement = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const stripe = useStripe()
    const items = useSelector(state => state.cart.items)

    useEffect(() => {
        if (!stripe) {
            return
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return
        }

        const itemsToSend = items.map(e => {
            return {
                id: e.id,
                qty: e.qty,
                priceAtOrer: e.price
            }
        })

        stripe
            .retrievePaymentIntent(clientSecret)
            .then(({ paymentIntent }) => {
                const orderObjet = {
                    name: paymentIntent.shipping.name,
                    phone: paymentIntent.shipping.phone,
                    address: paymentIntent.shipping.address,
                    totalPrice: paymentIntent.amount,
                    items: itemsToSend
                }
                orderService.createOrder(orderObjet)
            })
            .then(() => dispatch(clearCart()))
    }, [stripe])

    return (
        <div className="success-container">
            <div className="success">
                <h1 className="title">
                    Thank you for your purchase!
                </h1>
                <h3>Your items will be delivered between 3 - 8 business days</h3>
                <button onClick={() => navigate("/")}>Continue shopping</button>
            </div>
        </div>
    )
}

export default Success