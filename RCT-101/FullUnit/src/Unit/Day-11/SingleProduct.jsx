import React from 'react';

function SingleProduct() {
    const product = {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 }
    };

    return (
        <div className="single-product">
            <div className="product-container">
                <img src={product.image} alt={product.title} />
                <div className="info">
                    <h1>{product.title}</h1>
                    <p className="price">${product.price}</p>
                    <p>{product.description}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} reviews)</p>
                    <button>Add to Cart</button>
                </div>
            </div>

            <style>{`
                .single-product {
                    padding: 2rem;
                    max-width: 1000px;
                    margin: auto;
                    font-family: 'Segoe UI', sans-serif;
                }

                .product-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 2rem;
                    background: #fff;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    padding: 2rem;
                }

                .product-container img {
                    width: 100%;
                    max-width: 400px;
                    height: auto;
                    object-fit: contain;
                }

                .info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .info h1 {
                    margin-bottom: 1rem;
                    color: #2c3e50;
                }

                .price {
                    color: #27ae60;
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }

                .info p {
                    margin-bottom: 0.8rem;
                }

                button {
                    width: fit-content;
                    padding: 10px 20px;
                    background-color: #e67e22;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                    margin-top: 1rem;
                }

                button:hover {
                    background-color: #d35400;
                }

                @media (max-width: 768px) {
                    .product-container {
                        flex-direction: column;
                        align-items: center;
                    }
                }
            `}</style>
        </div>
    );
}

export default SingleProduct;
