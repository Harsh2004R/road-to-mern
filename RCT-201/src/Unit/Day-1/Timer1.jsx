import React from 'react'
import useTimer from './hooks/useTimer'
function Timer1() {
    const timer = useTimer(2500)
    return (
        <div>
            {timer && <h1>Timer 1</h1>}
        </div>
    )
}

export default Timer1
