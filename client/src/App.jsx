import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import "./styles/style.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Product from "./pages/Product"
import Footer from "./components/Footer"
import Checkout from "./pages/Checkout"
import Success from "./pages/Success"

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: (
            <a href="/">The page you are looking for doesn't exist. Click anywhere in the text to get redirected to the homepage</a>
        ),
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/:category",
                element: <Category />
            },
            {
                path: "/item/:id",
                element: <Product />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/success",
                element: <Success />
            }
        ]
    }
])

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App
