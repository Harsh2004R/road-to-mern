import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { requestAction, failureAction, postSuccessAction } from "../../../Redux/Redux_CRUD/Products/action"
import axios from "axios"
const Admin = () => {
    const { isLoading, isError, product } = useSelector((store) => {
        return {
            isLoading: store.isLoading,
            isError: store.isError,
            product: store.product
        }

    }, shallowEqual)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        price: '',
        brand: '',
        category: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        dispatch(requestAction())
        axios.post("http://localhost:3002/products",formData).then((res) => {
            console.log(res.data);
            dispatch(postSuccessAction(res.data))
        }).catch((err) => {
            dispatch(failureAction(err));
            console.log(err)
        })
    };

    if (isLoading) {
        return <h1 style={{ textAlign: "center" }}>Loading...</h1>
    }
    if (isError) {
        return <h1 style={{ textAlign: "center", color: "red" }}>{isError}</h1>
    }
    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Product</h2>
            <form onSubmit={handleSubmit}>

                <div style={{ marginBottom: '12px' }}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Product name"
                        style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '12px' }}>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '12px' }}>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Product price"
                        style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '12px' }}>
                    <label>Brand:</label>
                    <select
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                        required
                    >
                        <option value="">Select brand</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Sony">Sony</option>
                        <option value="DJI">DJI</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div style={{ marginBottom: '12px' }}>
                    <label>Category:</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                        required
                    >
                        <option value="">Select category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Drones">Drones</option>
                        <option value="Mobiles">Mobiles</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'teal', color: 'white', border: 'none', borderRadius: '4px' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Admin;
