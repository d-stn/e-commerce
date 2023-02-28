import { Link } from "react-router-dom"
import "../styles/style.css"
const Home = () => {
    return (
        <div>
            <nav className="main-nav">
                <Link to="/men">Men</Link>
                <Link to="/women">Women</Link>
                <Link to="/kids">Kids</Link>
                <Link to="/unisex">Unisex</Link>
            </nav>
        </div>
    )
}

export default Home