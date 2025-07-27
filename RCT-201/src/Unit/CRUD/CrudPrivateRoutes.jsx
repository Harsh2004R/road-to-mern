import React from 'react'
import { Navigate, useLocation } from "react-router-dom"
import { shallowEqual, useSelector } from "react-redux"
function CrudPrivateRoutes({ children }) {
    const location = useLocation()
    const { isAuth } = useSelector((store) => {
        return {
            isAuth: store.AuthReducer.isAuth
        }
    }, shallowEqual)
    console.log("isAuth from private route", isAuth)
    if (isAuth === false) {
        return <Navigate state={location.pathname} to="/login" />
    }
    return children
}

export default CrudPrivateRoutes
