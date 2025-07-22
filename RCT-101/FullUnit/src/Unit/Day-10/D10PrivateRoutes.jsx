import React, { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'
import { Navigate } from 'react-router';
function D10PrivateRoutes({ children }) {

    const { auth } = useContext(AuthContext);
    if (auth === false) {
        return <Navigate to="/login" />
    }
    return children;
}

export default D10PrivateRoutes
