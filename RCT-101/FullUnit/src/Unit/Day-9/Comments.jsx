import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Comments() {
    const [cmt, setCmt] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    const getComments = () => {
        return fetch(`https://jsonplaceholder.typicode.com/comments`).then((res) => res.json())
    }
    useEffect(() => {
        try {
            getComments().then((data) => {
                setCmt(data);
            })
        } catch (error) {
            setErr(error)
        } finally {
            setLoading(false)
        }
    }, [])
    console.log(cmt);




    if (loading) {
        return <p style={{ textAlign: "center" }}>Loading....</p>
    }
    if (err) {
        return <p style={{ color: "red" }}>[err]</p>
    }
    return (
        <>
            {
                cmt ? <h1 style={{ textAlign: "center" }}>Comments List</h1> : <h1 style={{ textAlign: "center" }}>No Comments to show</h1>
            }
            {
                cmt.map((el) => (

                    <div key={el.id} style={{ border: "2px solid #666666", padding: "5px" }}>
                        <h4>Name: {el.name}</h4>
                        <p>
                            ID: {el.id}
                        </p>
                        <h5 style={{ color: "#88b45dff" }}>
                            Email: {el.email}
                        </h5>
                        <Link to={`${el.id}`} style={{ textDecoration: "none" }}>
                            More Info...
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default Comments
