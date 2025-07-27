import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ProductCard from './ProductCard';
import { getProducts } from '../../Redux/Redux_CRUD/Products/action';
import { useLocation, useSearchParams } from 'react-router-dom';

function ProductList() {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams()
    const location = useLocation();
    let querry = location.search;
    const { products, isError, isLoading } = useSelector((store) => {
        return {
            products: store.ProductReducer.product,
            isLoading: store.ProductReducer.isLoading,
            isError: store.ProductReducer.isError,
        };
    }, shallowEqual);
    // let filterData = {
    //     params: {
    //         brand: searchParams.getAll("brand")
    //     }
    // }

    useEffect(() => {
        dispatch(getProducts(querry));
    }, [querry]);
    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        marginTop: '30px'
    };

    const headingStyle = {
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#333',
        marginTop: '20px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>All Products</h1>

            {isLoading && <h2 style={{ textAlign: "center" }}>Loading...</h2>}
            {isError && <h2 style={{ textAlign: "center", color: "red" }}>{isError}</h2>}

            <div style={gridStyle}>
                {products.length > 0 && products.map((el) => (
                    <ProductCard key={el.id} {...el} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
