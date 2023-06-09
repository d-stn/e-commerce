import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Product from "./pages/Product"
import Footer from "./components/Footer"
import Checkout from "./pages/Checkout"
import Success from "./pages/Success"
import "./styles/style.css"

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
            <a href="/">The page you are looking for doesn't exist. Click anywhere in the text to get redirected to the homepage.</a>
        ),
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/category/:category",
                element: <Category />
            },
            {
                path: "/item/:id",
                element: <Product />
            },
            {
                path: "/checkout/:type",
                // adding the pathname as a key makes the component rerender when the pathname changes
                // (fixes bug where if customer is on "buy now" page and clicks checkout nothing happens)
                element: <Checkout key={window.location.pathname} />
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
