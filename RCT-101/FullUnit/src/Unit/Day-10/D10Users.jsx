import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from "react-router-dom";
import D10Nav from './D10Nav';

function D10Users() {
    const [searchParams, setSearchParams] = useSearchParams()
    const pageFromURL = parseInt(searchParams.get("page")) || 1;
    const [cmt, setCmt] = useState([]);
    const [page, setPage] = useState(pageFromURL);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    const getComments = (page) => {
        return fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=5`).then((res) => res.json())
    }
    useEffect(() => {
        setLoading(true);
        setErr(null);
        getComments(page)
            .then((data) => setCmt(data))
            .catch((error) => setErr(error.message))
            .finally(() => setLoading(false));
    }, [page]);

    useEffect(() => {
        setSearchParams({ page: page })
    }, [page, setSearchParams])


    if (loading) {
        return <p style={{ textAlign: "center" }}>Loading....</p>
    }
    if (err) {
        return <p style={{ color: "red" }}>[err]</p>
    }
    return (
        <>
            <D10Nav />
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
            {/* Pagination Controls */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                >
                    Prev
                </button>
                <span style={{ margin: "0 10px" }}>Page: {page}</span>
                <button
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default D10Users
