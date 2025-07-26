import PSCCounter from './PSCCounter'
import { toggleAction } from "../../Redux/Redux-Psc-S2/action"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
function PSCTheme() {
    const Theme = useSelector((store) => store.Theme)
    const dispatch = useDispatch();
    const LightTheme = () => {
        dispatch(toggleAction("Light"))
    }
    const DarkTheme = () => {
        dispatch(toggleAction("Dark"))
    }
    console.log(Theme)
    return (

        <div style={{ backgroundColor: Theme === "Dark" ? "#000" : "#fff", padding: "70px", borderRadius: "25px", border: Theme === "Dark" ? "5px solid Lime" : "5px solid #DADADA", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center" }}>
            <div
                style={{
                    width: "500px", border: Theme === "Dark" ? "2px solid white" : "none", height: "120px",
                    borderRadius: "15px", display: "flex", justifyContent: "center",
                    alignItems: "center", alignContent: "center"
                }}
            >
                <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>

                    <button disabled={Theme === "Light"} style={{ width: "40%", height: "80px", borderRadius: "5px", border: "none" }} onClick={LightTheme}>Light</button>
                    <button disabled={Theme === "Dark"} style={{ width: "40%", height: "80px", borderRadius: "5px", border: "none" }} onClick={DarkTheme}>Dark</button>
                </div>
            </div>
            <PSCCounter />
        </div >

    )
}

export default PSCTheme
