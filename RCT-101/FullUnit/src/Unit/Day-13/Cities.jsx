import React, { useState, useEffect } from 'react';
import axios from "axios";
import AddCities from './AddCities';
function Cities() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const getCities = async () => {
        setLoading(true)
        try {
            let res = await axios.get(`http://localhost:3001/cities`)
            setData(res.data);
        } catch (error) {
            console.log(error)
            setError(error);
        } finally {
            setLoading(false)
        }
    }
    const handleDelet = async (id) => {
        let res = await axios.delete(`http://localhost:3001/cities/${id}`)
        console.log(res);
        getCities()
    }

    useEffect(() => {
        getCities()
    }, [])




    if (loading) {
        return <h1 style={{ textAlign: "center" }}>Loading...</h1>
    }
    if (error) {
        return <h1 style={{ textAlign: "center" }}>{`${error}`}</h1>
    }
    return (
        <>
            {
                data.map((el) => (
                    <div key={el.id} style={{ border: "2px solid lime", padding: "10px", marginTop: "8px" }}>
                        <h1>{el.id}</h1>
                        <h3>Name : {el.name}</h3>
                        <h4>Population : {el.population}</h4>
                        <h5>Country : {el.country}</h5>
                        <button onClick={() => handleDelet(el.id)}>Delete</button>
                    </div>
                ))
            }
            <AddCities refreshData={getCities} />
        </>
    )
}

export default Cities
