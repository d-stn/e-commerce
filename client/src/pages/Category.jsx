import { AdvancedImage } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"
import { fill } from "@cloudinary/url-gen/actions/resize"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import productService from "../services/products"

const Category = () => {
    // Route is defined as "/:category", so the part after the slash is known as "category"
    // We get it's value by destructuring and using the useParams hook
    const { category } = useParams()
    const [products, setProducts] = useState([])

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'ddq7og6ff'
        }
    });

    useEffect(() => {
        productService
            .getCategory(category)
            .then(res => setProducts(res))
    }, [category])

    return (
        <div className="products-listing">
            {products.map(p => (
                <Link to={`/${p.id}`} key={p.id} className="product-card">
                    <AdvancedImage cldImg={cld.image(p.image).resize(fill().width(280).height(400))} />
                    <span>{p.title}</span>
                    <span>€{p.price}</span>
                </Link>
            ))}
            YOU ARE ON CATEGORY PAGE
        </div>

    )
}

export default Category