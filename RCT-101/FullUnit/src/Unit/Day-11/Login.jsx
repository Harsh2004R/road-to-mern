import React, { useContext, useState } from 'react';
import { AuthContext } from './Context/AuthContext';
function Login() {
    const { login, logout } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("")
    const [res, setRes] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        // let obj = {
        //     email, password
        // }
        // fetch(`https://reqres.in/api/login`, {
        //     method: "POST",
        //     headers: {
        //         // "Content-Type": "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         email: "eve.holt@reqres.in",
        //         password: "cityslicka"
        //     }),
        // }).then((result) => {
        //     return result.json();
        // }).then((data) => {
        //     console.log(data)
        // }).catch((err) => {
        //     console.log("error from line 26", err)
        // })


        login();
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f0f2f5",
            fontFamily: "Arial, sans-serif"
        }}>
            <div style={{
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "#ffffff",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}>
                <h2 style={{
                    textAlign: "center",
                    marginBottom: "1.5rem",
                    color: "#2c3e50"
                }}>
                    Login
                </h2>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>Email:</label>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email"
                            placeholder="Enter your username"
                            style={{
                                width: "100%",
                                padding: "0.5rem",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                                outlineColor: "#2c3e50"
                            }}
                        />
                        <p style={{ color: "red" }}>eve.holt@reqres.in</p>
                    </div>

                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>Password:</label>
                        <input
                            onChange={(e) => { setPass(e.target.value) }}
                            type="password"
                            placeholder="Enter your password"
                            style={{
                                width: "100%",
                                padding: "0.5rem",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                                outlineColor: "#2c3e50"
                            }}
                        />
                        <p style={{ color: "red" }}>cityslicka</p>
                    </div>

                    <button type="submit" style={{
                        backgroundColor: "#2c3e50",
                        color: "#fff",
                        padding: "0.75rem",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        transition: "background-color 0.3s ease"
                    }}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
