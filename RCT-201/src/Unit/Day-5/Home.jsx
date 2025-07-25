import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <span style={{ marginRight: "50px" }}>
                <Link to="/" style={{ textDecoration: "none", color: "red" }}>  Home</Link>
            </span>
            <span style={{ marginRight: "50px" }}>
                <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>  Login</Link>
            </span>
            <span style={{ marginRight: "50px" }}>
                <Link to="/counter" style={{ textDecoration: "none", color: "#000" }}>  Counter</Link>
            </span>
            <span style={{ marginRight: "50px" }}>
                <Link to="/todos" style={{ textDecoration: "none", color: "#000" }}>  Todos</Link>
            </span>
            <span style={{ marginRight: "50px" }}>
                <Link to="/" style={{ textDecoration: "none", color: "#000" }}>  </Link>
            </span>
        </>
    )
}

export default Home
