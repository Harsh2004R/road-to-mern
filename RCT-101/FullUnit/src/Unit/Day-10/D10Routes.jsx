import AuthContextProvider from "./Context/AuthContext"
import { Routes, Route } from "react-router-dom"
import D10Nav from './D10Nav'
import D10Home from './D10Home'
import D10Users from "./D10Users"
import D10Login from './D10Login'
import Sensitive from "./Sensitive"
import D10PrivateRoutes from "./D10PrivateRoutes"
function D10Routes() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path="/" element={<D10Home />} />
                <Route path="/sensitive" element={<D10PrivateRoutes>
                    <Sensitive />
                </D10PrivateRoutes>} />
                <Route path="/user" element={<D10PrivateRoutes>
                    <D10Users />
                </D10PrivateRoutes>} />
                <Route path="/login" element={<D10Login />} />
                {/* <Route path="*" element={<NoPage />} /> */}

            </Routes>
        </AuthContextProvider>
    )
}

export default D10Routes
