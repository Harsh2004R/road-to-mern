import { Link } from "react-router-dom"

function CrudNav() {
    const navStyle = {
        backgroundColor: '#333',
        color: 'white',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const logoStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    };

    const navLinksStyle = {
        display: 'flex',
        gap: '1rem',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1rem',
    };

    return (
        <div style={navStyle}>
            <div style={logoStyle}>CRUD App</div>
            <div style={navLinksStyle}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/login" style={linkStyle}>Login</Link>
                <Link to="/admin" style={linkStyle}>Products</Link>
            </div>
        </div>
    );
}

export default CrudNav;
