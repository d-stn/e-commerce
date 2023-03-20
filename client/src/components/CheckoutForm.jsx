import { useEffect, useState } from "react";
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

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

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
            Please enter checkout information:
            <LinkAuthenticationElement
                id="link-authentication-element"
                onChange={(e) => {
                    // I don't know why it isn't "e.target.value"
                    setEmail(e.value)
                }}
            />
            <AddressElement options={{ mode: 'shipping', allowedCountries: ['FR', 'DE', 'NL', 'CH', 'BE'] }} />
            <PaymentElement id="payment-element" options={paymentElementOptions} />
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