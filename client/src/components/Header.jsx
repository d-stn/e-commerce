import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="main-nav">
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/unisex">Unisex</Link>
        </nav>
    )
}

export default Header