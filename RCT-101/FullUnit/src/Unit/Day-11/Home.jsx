
import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext"
function Home() {
    const { logout } = useContext(AuthContext)
    return (
        <div>

            <h1 style={{ textAlign: "center" }}>Home Page</h1>
            <button style={{ display: "block", margin: "auto" }} onClick={logout}>Log out</button>
        </div>
    )
}

export default Home
