import { useState } from "react"
import ReffTimer from "./ReffTimer";
function TimerUsereff() {
    const [toggle, setToggle] = useState(true);
    function handleToggle(flag) {
        setToggle(flag);
    }
    console.log(toggle)
    return (
        <>
            {toggle && <ReffTimer />}
            <p>Open browser console to check if cleanup function is called on unmounting.</p>
            <button onClick={() => handleToggle(!toggle)}>Toggle</button>
        </>
    )
}

export default TimerUsereff;
