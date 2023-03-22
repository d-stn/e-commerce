import { useState } from "react";
import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements,
    AddressElement
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    // Used to safely pass the payment information collected by the <PaymentElement> to the Stripe API
    const elements = useElements();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:5173/success",
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, user will be redirected to your `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <form className="payment-form" id="payment-form" onSubmit={handleSubmit} >
            <div style={{ marginBottom: "2rem" }}>
                <h3>Contact info</h3>
                <LinkAuthenticationElement
                    id="link-authentication-element"
                    onChange={(e) => {
                        // I don't know why it isn't "e.target.value"
                        setEmail(e.value)
                    }}
                />
            </div>

            <div style={{ marginBottom: "2rem" }}>
                <h3>Shipping</h3>
                <AddressElement options={{ mode: 'shipping', allowedCountries: ['FR', 'DE', 'NL', 'CH', 'BE'] }} />
            </div>

            <div style={{ marginBottom: "2rem" }} className="what">
                <h3>Payment</h3>
                <PaymentElement id="payment-element" options={paymentElementOptions} />
            </div>

            <button className="submit-payment-btn" disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form >
    );

}

export default CheckoutForm