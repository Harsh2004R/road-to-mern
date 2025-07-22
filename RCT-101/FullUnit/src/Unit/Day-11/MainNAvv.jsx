
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";
const styles = {
    nav: {
        backgroundColor: "#2c3e50",
        color: "#ecf0f1",
        padding: "0.8rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        position: "sticky",
        top: 0,
        zIndex: 1000
    },
    logo: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        color: "#ecf0f1",
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
        gap: "1.5rem",
        margin: 0,
        padding: 0,
    },
    link: {
        textDecoration: "none",
        color: "#ecf0f1",
        fontSize: "1rem",
        fontWeight: 500,
        transition: "color 0.3s ease",
    },
};

const MainNAvv = () => {
    const { auth } = useContext(AuthContext)
    return (
        <nav style={styles.nav}>
            <Link to="/" style={styles.link}><div style={styles.logo}>MyStore</div></Link>
            <ul style={styles.navLinks}>
                <li><Link to="/" style={styles.link}>Home</Link></li>
                <li><Link to="/about" style={styles.link}>About</Link></li>
                <li><Link to="/products" style={styles.link}>Products</Link></li>
                <li><Link to="/login" style={styles.link}>Login</Link></li>
                <li><Link to="/register" style={styles.link}>Register</Link></li>
                <li><Link style={styles.link}>Authenticated : {auth ? "True" : "False"}</Link></li>
            </ul>
        </nav>
    );
};

export default MainNAvv;
