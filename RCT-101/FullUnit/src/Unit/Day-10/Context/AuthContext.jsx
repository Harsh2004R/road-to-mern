import React, { useState, createContext } from 'react'
import { useNavigate } from 'react-router';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const render = useNavigate();
    const [auth, setAuth] = useState(true);
    const login = () => {
        setAuth(true);
        render("/")

    }
    const logout = () => {
        setAuth(false);
    }
    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
