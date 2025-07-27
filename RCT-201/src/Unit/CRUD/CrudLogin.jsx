import React, { useState } from 'react'
import axios from "axios"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../Redux/Redux_CRUD/auth/action"
import { useNavigate, useLocation } from "react-router-dom"
function CrudLogin() {
    const location = useLocation()
    const { token, isAuth } = useSelector((store) => {
        return {
            token: store.AuthReducer.token,
            isAuth: store.AuthReducer.isAuth
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
        dispatch(loginUser(form)).then((res) => {
            naviaget(location.state)
        })

    }

    function handleHome() {
        naviaget("/")
    }
    console.log(token, isAuth)
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



export default CrudLogin
