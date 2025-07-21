import React from 'react'
import AuthContextProvider from './Context/AuthContext'
import Navbar from './Navbar'


function Main() {
    return (
        <AuthContextProvider>
            <Navbar />
        </AuthContextProvider>
    )
}

export default Main
