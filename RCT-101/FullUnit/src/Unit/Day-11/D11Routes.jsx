import AuthContextProvider from "./Context/AuthContext"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import NotPageFound from "./NotPageFound"
import Products from "./Products"
import Login from "./Login"
import SingleProduct from "./SingleProduct"
import Register from "./Register"
import PrivateRoutes from "./PrivateRoutes"
import MainNAvv from './MainNAvv'

function D11Routes() {
  return (
    <AuthContextProvider>
      <MainNAvv />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<PrivateRoutes>
          <Products />
        </PrivateRoutes>} />
        <Route path="/products/:id" element={<PrivateRoutes>
          <SingleProduct />
        </PrivateRoutes>} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotPageFound />} />
      </Routes>
    </AuthContextProvider>
  )
}

export default D11Routes
