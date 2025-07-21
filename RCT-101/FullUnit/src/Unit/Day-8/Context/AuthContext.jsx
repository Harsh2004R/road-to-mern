import { createContext, useState } from "react";
export const AuthContext = createContext();



const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const login = () => {
        setAuth(true);
    }
    const logout = () => {
        setAuth(false);
    }
    return <AuthContext.Provider value={{ login, logout, auth }}>
        {children}
    </AuthContext.Provider>
}
export default AuthContextProvider;






