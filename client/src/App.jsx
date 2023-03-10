import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import "./styles/style.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Product from "./pages/Product"
import Footer from "./components/Footer"
import Checkout from "./pages/Checkout"
import Success from "./pages/Success"
import Proceed from "./pages/Proceed"

const Layout = () => {
    return (
        <div>
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
                path: "/order",
                element: <Checkout />
            },
            {
                path: "/success",
                element: <Success />
            },
            {
                path: "/proceed",
                element: <Proceed />
            },
        ]
    }
])

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App
