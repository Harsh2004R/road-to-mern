import React, { useContext } from 'react'
import { AuthContext } from "./Context/AuthContext"
import { Navigate } from 'react-router';
function PrivateRoutes({ children }) {
    const { auth } = useContext(AuthContext);
    if (!auth) {
        return <Navigate to="/login" />
    }
    return children;
}
export default PrivateRoutes
