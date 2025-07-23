import React, { useState } from 'react'
import axios from 'axios'



function AddCities({ refreshData }) {
    let formObj = {
        name: "",
        country: "",
        population: 0,
    }
    const [form, setForm] = useState(formObj)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post(`http://localhost:3001/cities`, form).then((res) => {
            if (res.status === 201) {
                refreshData();
            }
            console.log(res)
        }).catch((err) => {
            console.log(err)
            setError(err);
        }).finally(() => {
            setLoading(false)
        })
    }
    if (loading) {
        return <h1 style={{ textAlign: "center" }}>Loading...</h1>
    }
    if (error) {
        return <h1 style={{ textAlign: "center" }}>{`${error}`}</h1>
    }
    return (
        <form onSubmit={submit}>
            <input name="name" value={form.name} onChange={handleChange} type='text' placeholder='enter name' />
            <input name="country" value={form.country} onChange={handleChange} type='text' placeholder='enter country' />
            <input name="population" value={form.population} onChange={handleChange} type='number' placeholder='enter population' />
            <input type="submit" value={"Add"} />
        </form>
    )
}

export default AddCities
