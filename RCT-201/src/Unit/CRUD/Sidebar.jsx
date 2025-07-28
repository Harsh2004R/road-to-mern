
import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom"
const sidebarStyle = {
    width: '250px',
    padding: '20px',
    borderRight: '1px solid #ddd',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    height: '100%',
};

const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#333',
};

const checkboxGroupStyle = {
    marginBottom: '20px',
};

const checkboxLabelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontSize: '14px',
    color: '#555',
    cursor: 'pointer',
};

const radioContainerStyle = {
    marginTop: '20px',
};

function Sidebar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initBrand = searchParams.getAll("brand")
    const initCat = searchParams.getAll("category")
    const initOrder = searchParams.getAll("order")
    const [brand, setBrand] = useState(initBrand || []);
    const [category, setCategory] = useState(initCat || []);
    const [order, setOrder] = useState(initOrder || "");
    useEffect(() => {
        let param = {
            brand,
            category
        }
        order && (param.order = order);
        setSearchParams(param)
    }, [brand, category, order])



    const handleBrand = (e) => {
        const { value } = e.target;
        let brandArray = [...brand];
        if (brandArray.includes(value)) {
            brandArray = brandArray.filter((el) => el !== value)
        } else {
            brandArray.push(value);
        }
        setBrand(brandArray)
    }
    const handleCategory = (e) => {
        const { value } = e.target;
        let catArray = [...category];
        if (catArray.includes(value)) {
            catArray = catArray.filter((el) => el !== value)
        } else {
            catArray.push(value);
        }
        setCategory(catArray)
    }
    const handleOrder = (e) => {
        const { value } = e.target;
        setOrder(value);
    }


    return (




        <div style={sidebarStyle}>
            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Filter Products</h3>

            {/* Brand Checkboxes */}
            <div style={checkboxGroupStyle}>
                <label style={labelStyle}>Brand:</label>
                {['Apple', 'Samsung', 'Sony', 'DJI', 'Other'].map((brandItem) => (
                    <label key={brandItem} style={checkboxLabelStyle}>
                        <input
                            type="checkbox"
                            name="brand"
                            value={brandItem}
                            style={{ marginRight: '8px' }}
                            onChange={handleBrand}
                            checked={brand.includes(brandItem)}
                        />
                        {brandItem}
                    </label>
                ))}
            </div>

            {/* Category Checkboxes */}
            <div style={checkboxGroupStyle}>
                <label style={labelStyle}>Category:</label>
                {['Electronics', 'Drones', 'Mobiles', 'Accessories', 'Others'].map((cat) => (
                    <label key={cat} style={checkboxLabelStyle}>
                        <input
                            type="checkbox"
                            name="category"
                            value={cat}
                            style={{ marginRight: '8px' }}
                            onChange={handleCategory}
                            checked={category.includes(cat)}
                        />
                        {cat}
                    </label>
                ))}
            </div>

            {/* Price Sort Radio */}
            <div style={radioContainerStyle} onChange={handleOrder}>
                <label style={labelStyle}>Sort by Price:</label>
                <label style={checkboxLabelStyle}>
                    <input type="radio" name="sort" value="asc" style={{ marginRight: '8px' }} />
                    Low to High
                </label>
                <label style={checkboxLabelStyle}>
                    <input type="radio" name="sort" value="desc" style={{ marginRight: '8px' }} />
                    High to Low
                </label>
            </div>
        </div>
    );
}

export default Sidebar;
