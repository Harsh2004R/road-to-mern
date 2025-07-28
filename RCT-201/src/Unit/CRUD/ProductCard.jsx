import React from 'react';
import { deleteProduct, getProducts } from "../../Redux/Redux_CRUD/Products/action"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
function ProductCard({ id, brand, image, category, name, price }) {
    const dispatch = useDispatch();
    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '16px',
        width: '260px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fff',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        maxHeight: '300px',
        objectFit: 'contain',
        borderRadius: '8px',
        marginBottom: '12px',
        display: 'block',
        marginInline: 'auto'
    };

    const nameStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '6px',
        color: '#333'
    };

    const priceStyle = {
        fontSize: '16px',
        color: 'teal',
        fontWeight: 'bold',
        marginBottom: '8px'
    };

    const brandCategoryStyle = {
        fontSize: '14px',
        color: '#666',
        marginBottom: '4px'
    };

    const handleDelete = () => {
        dispatch(deleteProduct(id)).then((res) => {
            location.reload();
        })
    }
    return (

        <div style={cardStyle} >
            <img src={image} alt={name} style={imageStyle} />
            <div style={nameStyle}>{name}</div>
            <div style={priceStyle}>₹{price}</div>
            <div style={brandCategoryStyle}>Brand: {brand}</div>
            <div style={brandCategoryStyle}>Category: {category}</div>
            <br />
            <button onClick={handleDelete}>
                Delete
            </button>
            <button >
                <Link to={`/settings/${id}`} >Edit</Link>
            </button>
        </div >
    );
}

export default ProductCard;
