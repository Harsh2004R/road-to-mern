import { useState } from "react"
import TimerComponent from "./TimerComponent.jsx"

function Timer() {
    const [toggle, setToggle] = useState(true);
    function handleToggle(flag) {
        setToggle(flag);
    }
    console.log(toggle)
    return (
        <>
            {toggle && <TimerComponent />}
            <p>Open browser console to check if cleanup function is called on unmounting.</p>
            <button onClick={() => handleToggle(!toggle)}>Toggle</button>
        </>
    )
}

export default Timer
