import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ShoppingCartIcon } from "../styles/icons"
import Image from "./Image"
import ShoppingCart from "./ShoppingCart"

const Header = () => {
    const items = useSelector(state => state.cart.items)
    return (
        <header>
            <Link to="/">
                <Image
                    publicId="site_logo"
                    style={{ width: "50px", height: "50px", margin: "0 1rem" }}
                />
                <span className="title">TechRider</span>
            </Link>
            <Link to="/headphones">Headphones</Link>
            <Link to="/monitor">Monitors</Link>
            <Link to="/gpu">Graphics Cards</Link>

            {/* TODO: Make this a dropodown menu that shows many categories on hover */}
            <Link>Other</Link>

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