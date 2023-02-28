import { useParams } from "react-router-dom"

const Category = () => {
    const { category } = useParams()

    return (
        <div>
            This is {category}'s clothes
        </div>
    )
}

export default Category