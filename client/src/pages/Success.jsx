import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Success = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 5000);
    }, [])

    return (
        <div>
            Payment successfull. You are being redirecter to the homepage. Please do not close the browser.
        </div>
    )
}

export default Success