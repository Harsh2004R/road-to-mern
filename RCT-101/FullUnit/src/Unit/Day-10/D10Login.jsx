import React, { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'
import { useNavigate } from 'react-router'
function D10Login() {
  const { auth, login, logout } = useContext(AuthContext)
  const render = useNavigate()
  return (
    <div>
      <h1>Login Here</h1>
      <button onClick={login}>Login</button>
      <br>
      </br>
      <button onClick={logout}>Logout</button>
      <button onClick={() => render("/")}>Home</button>
    </div>
  )
}

export default D10Login
