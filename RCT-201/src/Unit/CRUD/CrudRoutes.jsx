import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/Admin'
import CrudHome from "./CrudHome"
import CrudNav from './CrudNav'
import Login from "./CrudLogin"
import CrudPrivateRoutes from './CrudPrivateRoutes'
import Settings from "./Settings"
function CrudRoutes() {
    return (
        <>
            <CrudNav />
            <Routes>
                <Route path="/" element={<CrudHome />} />
                {/* <Route path="/" element={<Admin />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<CrudPrivateRoutes>
                    <Admin />
                </CrudPrivateRoutes>} />
                <Route path="/settings" element={<CrudPrivateRoutes>
                    <Settings />
                </CrudPrivateRoutes>} />
            </Routes>
        </>

    )
}

export default CrudRoutes
