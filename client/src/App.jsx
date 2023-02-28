import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Category from "./pages/Category"
import Home from "./pages/Home"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:category" element={<Category />} />
            </Routes>
        </Router>
    )
}

export default App
