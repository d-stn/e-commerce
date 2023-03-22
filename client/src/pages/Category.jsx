import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { TransformedImage } from "../components/Image"
import productService from "../services/products"
import { displayPrice } from "../utils/helperFunctions"

const Category = () => {
    // Route is defined as "/:category", so the part after the slash is known as "category"
    // We get it's value by destructuring and using the useParams hook
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const [sortBy, setSortBy] = useState("Choose here")

    useEffect(() => {
        productService
            .getCategory(category)
            .then(res => {
                switch (sortBy) {
                    case "lowest price":
                        setProducts(res.sort((a, b) => a.price - b.price))
                        break;
                    case "highest price":
                        setProducts(res.sort((a, b) => b.price - a.price))
                    default:
                        setProducts(res)
                }
            })
    }, [category, sortBy])

    return (
        <div>
            {products.length > 0 ?
                <div>
                    <hr />
                    <div style={{ display: "flex", padding: "1rem 0" }}>
                        <h1>{category.toLocaleUpperCase()}</h1>
                        <div className="sort-menu-container">
                            {/* we have another <div> because that way <label> and <select> are centered vertically */}
                            <div className="sort-menu">
                                <label htmlFor="sort">Order by:</label>
                                <select onChange={(e) => setSortBy(e.target.value)} defaultValue={"DEFAULT"}>
                                    <option value="DEFAULT" disabled hidden></option>
                                    <option value="lowest price">lowest price</option>
                                    <option value="highest price">highest price</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="products-listing">
                        {products && products.map(p => (
                            <Link to={`/item/${p.id}`} key={p.id} className="product-card">
                                <TransformedImage
                                    publicId={p.image}
                                    width={300}
                                    height={225}
                                />
                                <span>{p.title}</span>
                                <span>{displayPrice(p.price)}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                :
                <div>No products match category "{category}"</div>
            }
        </div>
    )
}

export default Category