import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ShoppingCart from "./ShoppingCart"

const Header = () => {
    const items = useSelector(state => state.cart.items)
    const [open, setOpen] = useState(false)

    return (
        <nav className="header">
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/unisex">Unisex</Link>
            <button onClick={() => setOpen(!open)}>Cart</button>
            <span>{items.length}</span>
            {open && <ShoppingCart />}
        </nav>
    )
}

export default Header