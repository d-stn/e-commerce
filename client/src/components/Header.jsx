import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ShoppingCartIcon } from "../styles/icons"
import Image from "./Image"
import ShoppingCart from "./ShoppingCart"
import { useState } from "react"
import productService from "../services/products"
import useClickOutside from "../hooks/useClickOutside"

const Header = () => {
    const items = useSelector(state => state.cart.items)
    const [searchedItems, setSearchedItems] = useState([])
    const [searchParam, setSearchParam] = useState("")
    const domNode = useClickOutside(() => { setSearchedItems([]) })

    const handleSearch = (event) => {
        event.preventDefault()
        if (searchParam) {
            productService
                .getSearch(searchParam)
                .then(res => {
                    if (res.length > 0) {
                        setSearchedItems(res)
                    }
                    else {
                        setSearchedItems("No items")
                    }
                })
        }
    }


    return (
        <header>
            <Link to="/">
                <Image
                    publicId="site_logo"
                    style={{ width: "50px", height: "50px", margin: "0 1rem" }}
                />
                <span className="title">TechRider</span>
            </Link>
            <Link to="/category/headphones">Headphones</Link>
            <Link to="/category/monitor">Monitors</Link>
            <Link to="/category/gpu">Graphics Cards</Link>

            {/* TODO: Make this a dropodown menu that shows many categories on hover */}
            <Link>Other</Link>

            <div>
                <form onSubmit={handleSearch}>
                    <input
                        placeholder="Search items"
                        type="text"
                        onClick={handleSearch}
                        value={searchParam}
                        onChange={(e) => {
                            setSearchParam(e.target.value)
                            if (!searchParam) {
                                setSearchedItems([])
                            }
                        }}
                    />
                    <button>Search</button>
                </form>
                {(searchedItems.length > 0 && searchParam) &&
                    <div ref={domNode} className="search-container">{
                        Array.isArray(searchedItems) ?
                            searchedItems.map(e => (
                                <SearchBarItem
                                    item={e}
                                    key={e.title}
                                    onClick={() => {
                                        setSearchParam("")
                                        setSearchedItems([])
                                    }} />
                            ))
                            :
                            <div>No items found</div>
                    }</div>
                }
            </div>

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


const SearchBarItem = ({ item, onClick }) => {
    return (
        <Link to={`/item/${item.id}`} onClick={onClick}>
            <div>{item.title}</div>
            <div className="categories">in {item.categories.join(", ")}</div>
        </Link>
    )
}

export default Header