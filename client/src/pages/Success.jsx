import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearCart } from "../reducers/cartReducer"

const Success = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(clearCart())
            navigate("/")
        }, 5000);

        return () => clearTimeout(timeout)
    }, [])

    return (
        <div style={{ minHeight: "100vh" }}>
            <h2>
                Payment successfull. You are being redirected to the homepage. Please do not close the browser.
            </h2>
        </div>
    )
}

export default Success