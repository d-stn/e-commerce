import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ShoppingCartIcon } from "../styles/icons"
import ShoppingCart from "./ShoppingCart"

const Header = () => {
    const items = useSelector(state => state.cart.items)

    return (
        <header>
            <Link to="/">
                <img src="https://res.cloudinary.com/ddq7og6ff/image/upload/v1679149476/site_logo.png" alt="site_logo" style={{ width: "50px", height: "50px", margin: "0 1rem" }} />
                <span className="title">TechRider</span>
            </Link>
            <Link to="/cpu">Processors</Link>
            <Link to="/gpu">Graphics Cards</Link>
            <Link to="/headphones">Headphones</Link>
            <Link to="/monitor">Monitors</Link>
            <Link to="/component">Other</Link>

            <div className="dropdown">
                <div className="icon">
                    <ShoppingCartIcon />
                    <span>{items.reduce((a, b) => a + b.qty, 0)}</span>
                </div>
                <ShoppingCart />
            </div>
        </header>
    )
}

export default Header