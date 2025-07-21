import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

const Navbar = () => {
    const { login, logout, auth } = useContext(AuthContext);

    const handleLogin = () => {
        // You can call your login API here
        console.log("Logging in...");
        setAuth(true);
    };

    const handleLogout = () => {
        // You can call your logout logic here
        console.log("Logging out...");
        setAuth(false);
    };

    const navbarStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#101010",
        padding: "10px 20px",
        color: "white",
        fontFamily: "Arial, sans-serif",
    };

    const titleStyle = {
        margin: 0,
        fontSize: "24px",
    };

    const authTextStyle = {
        margin: "0 10px 0 0",
        fontWeight: "bold",
        fontSize: "16px",
    };

    const buttonStyle = {
        padding: "6px 12px",
        marginLeft: "10px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        backgroundColor: "#fff",
        color: "#101010",
        fontWeight: "bold",
    };

    return (
        <nav style={navbarStyle}>
            <div className="nav-left">
                <h2 style={titleStyle}>MyApp</h2>
            </div>
            <div className="nav-right" style={{ display: "flex", alignItems: "center" }}>
                <p style={authTextStyle}>Auth: {auth ? "✅ True" : "❌ False"}</p>
                <button style={buttonStyle} onClick={login}>Login</button>
                <button style={buttonStyle} onClick={logout}>Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
