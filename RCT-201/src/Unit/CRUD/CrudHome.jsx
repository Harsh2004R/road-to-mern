import ProductList from "./ProductList";
import Sidebar from "./Sidebar";

function CrudHome() {
    const containerStyle = {
        display: 'flex',
        padding: '20px',
        gap: '20px',
        fontFamily: 'Arial, sans-serif'
    };

    const titleStyle = {
        textAlign: 'center',
        marginTop: '30px',
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#333'
    };

    return (
        <div>
            <h1 style={titleStyle}>Home</h1>
            <div style={containerStyle}>
                <Sidebar />
                <ProductList />
            </div>
        </div>
    );
}

export default CrudHome;
