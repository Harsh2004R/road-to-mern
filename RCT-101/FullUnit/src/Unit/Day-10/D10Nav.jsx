import { Link } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";
const D10Nav = () => {
    const { auth, login, logout } = useContext(AuthContext)
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
                <Link to={"/"} style={{ marginRight: "10px", textDecoration: "none", color: "#fff" }}>  <h2 style={titleStyle}>MyApp</h2></Link>
            </div>
            <div className="nav-right" style={{ display: "flex", alignItems: "center" }}>
                <Link to={"/sensitive"} style={{ marginRight: "10px", textDecoration: "none", color: "#fff" }}>  <p style={authTextStyle}>Sensitive</p> </Link>
                <Link to={"/user"} style={{ marginRight: "10px", textDecoration: "none", color: "#fff" }}> <p style={authTextStyle}>{auth ? "User" : ""}</p></Link>
                <p style={authTextStyle}>Auth: {auth ? "✅ True" : "❌ False"}</p>
                <button style={buttonStyle} onClick={login}>Login</button>
                <button style={buttonStyle} onClick={logout}>Logout</button>
            </div>
        </nav>
    );
};

export default D10Nav;

