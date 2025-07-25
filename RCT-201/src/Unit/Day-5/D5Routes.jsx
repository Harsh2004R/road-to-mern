import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Counter from "./Counter"
import Todos from "./Todos"
import PrivateRoutes from './PrivateRoutes'
function D5Routes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/todos" element={<PrivateRoutes>
                <Todos />
            </PrivateRoutes>} ></Route>
            <Route path="/counter" element={<PrivateRoutes>
                <Counter />
            </PrivateRoutes>} ></Route>
        </Routes>
    )
}

export default D5Routes
