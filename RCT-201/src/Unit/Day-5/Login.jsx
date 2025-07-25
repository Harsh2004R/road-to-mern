import React, { useState } from 'react'
import axios from "axios"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { authAction, tokenAction } from "../../Redux/ReduxD5/Auth/action"
import { useNavigate } from "react-router-dom"
function Login() {
    const { token, isAuth } = useSelector((store) => {
        return {
            token: store.authReducer.token,
            isAuth: store.authReducer.isAuth
        }
    }, shallowEqual)

    const initObj = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    }
    const [form, setForm] = useState(initObj)
    const dispatch = useDispatch()
    const naviaget = useNavigate()
    function change(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://reqres.in/api/login",
            form,
            {
                headers: {
                    "x-api-key": "reqres-free-v1"
                }
            }).then((data) => {
                dispatch(authAction());
                dispatch(tokenAction(data.data.token));
            }).catch((err) => {
                console.log(err)
            })

    }

    function handleHome() {
        naviaget("/")
    }
    return (
        <>

            <h1>
                Login
            </h1>
            {
                token ? <h4 style={{ color: "skyblue" }}>{token}</h4> : <h4 style={{ color: "red" }}>token required</h4>
            }


            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='enter email' name="email" onChange={change} value={form.email} />
                <input type="password" placeholder='enter password' name="password" onChange={change} value={form.password} />
                <input type='submit' value="Submit" />
            </form>
            <br>
            </br>
            <br>
            </br>
            {isAuth ? <button onClick={handleHome}>Home</button> : "email: eve.holt@reqres.in , password: cityslicka"}
        </>
    )
}

export default Login
