import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import orderService from "../services/order"
import { displayPrice } from "../utils/helperFunctions"
import CheckoutForm from "../components/CheckoutForm"
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage } from "@cloudinary/react"
import { fill } from "@cloudinary/url-gen/actions/resize"

const stripePromise = loadStripe("pk_test_51MimZFJrvCD8ptIuFKxFW1lwgtrRG17zgGl0auVPkoFYE1lou7uCJytPgHaeGl5kF6D10uC39jroHWUhBQVOIeVV00MQewnjtY")

const Checkout = () => {
    const items = useSelector(state => state.cart.items)
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
        if (items.length < 1) {
            return
        }

        const makeRequest = async () => {
            try {
                const res = await orderService.createPaymentIntent(items)
                setClientSecret(res.clientSecret)
            }
            catch (err) {
                console.log(err);
            }
        }
        makeRequest()
    }, [])

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'ddq7og6ff'
        }
    });

    // stripe "minimal" preset with some minor tweaks
    const appearance = {
        theme: 'flat',
        variables: {
            fontFamily: ' "Montserrat", sans-serif',
            fontLineHeight: '1.5',
            borderRadius: '10px',
            colorBackground: '#F6F8FA',
        },
        rules: {
            '.Block': {
                backgroundColor: 'var(--colorBackground)',
                boxShadow: 'none',
                padding: '12px'
            },
            '.Input': {
                fontSize: "1.05rem"
            },
            '.Input:disabled, .Input--invalid:disabled': {
                color: 'lightgray'
            },
            '.Tab': {
                padding: '10px 12px 8px 12px',
                border: 'none'
            },
            '.Tab:hover': {
                border: 'none',
                boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
            },
            '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
                border: 'none',
                backgroundColor: '#fff',
                boxShadow: '0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
            },
            '.Label': {
                fontWeight: '500'
            }
        }
    };

    const options = {
        clientSecret,
        appearance
    }

    return (
        <>
            {items.length > 0 ?
                clientSecret && (
                    <div className="checkout-container">
                        <div>
                            <div className="items-list">
                                {items.map(item => (
                                    <div key={item.id} style={{ display: "flex" }}>
                                        <AdvancedImage cldImg={
                                            cld.image(item.image)
                                                .resize(
                                                    fill()
                                                        .width(200)
                                                        .height(150)
                                                )
                                        } />
                                        <div>
                                            <Link to={`/item/${item.id}`}>
                                                {item.title}
                                            </Link>
                                            <p>{displayPrice(item.price)} x {item.qty}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="total">
                                Total: {displayPrice(items.reduce((a, b) => a + (b.qty * b.price), 0))}
                            </div>
                        </div>
                        <div>
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </div>
                )
                :
                <div>Your shopping cart is empty. To add products in your cart, please
                    {" " /* this is needed to have space between "please" and "browse" */}
                    <Link to="/" style={{
                        color: "#fe872c"
                    }}>
                        browse the store
                    </Link>
                </div>
            }
        </>
    )
}

export default Checkout