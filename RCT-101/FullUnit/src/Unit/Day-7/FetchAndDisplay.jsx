import React, { useEffect, useState } from 'react';

function FetchAndDisplay() {
    const initState = {
        title: '',
        imageUrl: '',
        price: '',
    }
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState(initState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(2);

    const fetchAndShow = async (page) => {

        try {
            let res = await fetch(`http://localhost:3001/products?_page=${page}&_limit=2`)
            if (!res.ok) throw new Error("Failed to fetch products");
            const data = await res.json();
            setProducts(data)
        } catch (error) {
            console.error("Error fetching:", error);
            setError(error.message);
        }
    }
    useEffect(() => {
        fetchAndShow(page)
    }, [page])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("http://localhost:3001/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            await fetchAndShow(page);
            setFormData(initState);
        } catch (error) {
            setError(error.message);
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h1 style={{ color: "blue", textAlign: "center" }}>Loading.....</h1>
    }
    if (error) {
        return <p style={{ color: "red", textAlign: "center" }}>{error}</p>
    }

    return (
        <div style={{
            maxWidth: '500px',
            margin: '50px auto',
            padding: '30px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            fontFamily: 'Arial',
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Product Form</h2>



            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter product title"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Image URL</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder="Enter image URL"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                    />
                </div>

                <input
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}
                />


            </form>


            <hr style={{ margin: "30px 0" }} />
            <h3 style={{ textAlign: "center" }}>Product List</h3>

            {products.length === 0 ? (
                <p style={{ textAlign: "center", color: "gray" }}>No products found.</p>
            ) : (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    marginTop: '20px',
                }}>
                    {products.map((product) => (
                        <div key={product.id} style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '15px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                        }}>
                            <img src={product.imageUrl} alt={product.title} style={{
                                width: '80px',
                                height: '80px',
                                objectFit: 'cover',
                                borderRadius: '5px',
                            }} />
                            <div>
                                <h4 style={{ margin: '0 0 5px 0' }}>{product.title}</h4>
                                <p style={{ margin: 0, fontWeight: 'bold' }}>₹{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}


            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                <div style={{ display: "flex", width: "120px", justifyContent: "space-between" }}>

                    <button disabled={page == 1} onClick={() => setPage(page - 1)}>Prev</button>
                    <button style={{ color: "#000" }} disabled>{page}</button>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </div>



        </div>










    );
}

export default FetchAndDisplay;
