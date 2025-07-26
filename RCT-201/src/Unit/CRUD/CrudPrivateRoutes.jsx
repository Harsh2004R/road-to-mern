import React from 'react'
import { Navigate } from "react-router-dom"
import { shallowEqual, useSelector } from "react-redux"
function CrudPrivateRoutes({ children }) {
    const { isAuth } = useSelector((store) => {
        return {
            isAuth: store.AuthReducer.isAuth
        }
    }, shallowEqual)
    console.log("isAuth from private route", isAuth)
    if (isAuth === false) {
        return <Navigate to="/login" />
    }
    return children
}

export default CrudPrivateRoutes
