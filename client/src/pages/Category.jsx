import { AdvancedImage } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"
import { fill } from "@cloudinary/url-gen/actions/resize"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import productService from "../services/products"
import { displayPrice } from "../utils/helperFunctions"

const Category = () => {
    // Route is defined as "/:category", so the part after the slash is known as "category"
    // We get it's value by destructuring and using the useParams hook
    const { category } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        productService
            .getCategory(category)
            .then(res => setProducts(res))
    }, [category])

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'ddq7og6ff'
        }
    });

    return (
        <div className="products-listing">
            {products && products.map(p => (
                <Link to={`/item/${p.id}`} key={p.id} className="product-card">
                    <AdvancedImage cldImg={cld.image(p.image).resize(fill().width(280).height(400))} />
                    <span>{p.title}</span>
                    <span>{displayPrice(p.price)}</span>
                </Link>
            ))}
        </div>

    )
}

export default Category