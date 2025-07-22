import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {

    const [product, setPRoduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    function getProducts(page) {

        return fetch(`http://localhost:3001/products`).then((res) => {
            return res.json();
        }).then((data) => {
            return data;
        })

    }
    useEffect(() => {
        setLoading(true);
        setError(null);
        getProducts().then((result) => {
            setPRoduct(result)
        }).catch((error) => setError(error.message)).finally(() => setLoading(false));

    }, [])


    let dummyData = product;
    if (loading) {
        return <h1 style={{ textAlign: "center" }}>Loading....</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div className="product-page">
            <h1>Our Products</h1>
            <div className="products-grid">
                {dummyData.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p className="price">${product.price}</p>
                        <p className="category">{product.category}</p>
                        <Link to={`/products/${product.id}`} className="details-btn">View Details</Link>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button >&laquo;</button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button >&raquo;</button>
            </div>

            <style>{`
                .product-page {
                    padding: 2rem;
                    font-family: 'Segoe UI', sans-serif;
                    max-width: 1200px;
                    margin: auto;
                }

                h1 {
                    text-align: center;
                    margin-bottom: 2rem;
                    font-size: 2rem;
                    color: #2c3e50;
                }

                .products-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }

                .product-card {
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 1rem;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    text-align: center;
                    transition: transform 0.3s ease;
                    background-color: #fff;
                }

                .product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                }

                .product-card img {
                    max-width: 100%;
                    height: 200px;
                    object-fit: contain;
                }

                .product-card h2 {
                    font-size: 1rem;
                    margin: 0.5rem 0;
                }

                .price {
                    color: #27ae60;
                    font-weight: bold;
                }

                .category {
                    font-size: 0.9rem;
                    color: #888;
                    margin-bottom: 0.5rem;
                }

                .details-btn {
                    padding: 0.5rem 1rem;
                    background-color: #3498db;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                }

                .details-btn:hover {
                    background-color: #2980b9;
                }

                .pagination {
                    text-align: center;
                    margin-top: 2rem;
                }

                .pagination button {
                    margin: 0 5px;
                    padding: 8px 16px;
                    background-color: #f1f1f1;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 1rem;
                }

                .pagination button.active,
                .pagination button:hover {
                    background-color: #3498db;
                    color: white;
                }
            `}</style>
        </div>
    );
}

export default Products;
