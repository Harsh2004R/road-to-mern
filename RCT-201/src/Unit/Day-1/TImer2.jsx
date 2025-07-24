import React from 'react'
import useTimer from './hooks/useTimer'
function TImer2() {
    const timer = useTimer(1500)
    return (
        <div>
            {timer && <h1>Timer 2</h1>}
        </div>
    )
}

export default TImer2
