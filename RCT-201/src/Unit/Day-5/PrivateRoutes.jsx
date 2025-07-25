import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Login from "./Login"
function PrivateRoutes({ children }) {
    const isAuth = useSelector((store) => store.authReducer.isAuth)
    return (
        isAuth ? children : <Login />
    )
    // if (!isAuth) {
    //     return <Navigate to="/login" />
    // }
    // return children
}

export default PrivateRoutes
