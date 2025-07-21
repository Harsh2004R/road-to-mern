import React, { useState, useEffect, useRef } from 'react'

function ReffTimer() {
    const [timer, setTimer] = useState(10);
    const timerInterval = useRef(null);
    const [input, setInput] = useState(0)
    function formation(val) {
        return val <= 9 ? `0${val}` : `${val}`
    }
    function formateTimer(TimeInSec) {
        const seconds = TimeInSec % 60
        const minutes = Math.floor(TimeInSec / 60) % 60;
        const hours = Math.floor(TimeInSec / 3600);
        return `${formation(hours)}:${formation(minutes)}:${formation(seconds)}`
    }
    useEffect(() => {
        const cleanup = () => {
            handleStp()
            console.log("cleanup function called.>")
        }
        return cleanup // Clean up on unmount
    }, []);


    const handleStart = () => {
        if (timerInterval.current !== null) {
            return;
        }
        timerInterval.current = setInterval(() => {
            setTimer(prev => {
                console.log(prev, Date.now())
                if (prev <= 1) {
                    clearInterval(timerInterval.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }
    const handleStp = () => {
        clearInterval(timerInterval.current)
        timerInterval.current = null;
    }
    const handleReset = () => {
        handleStp();
        setTimer(10)
    }
    const handleInput = (e) => {
        setInput(e.target.value)
        setTimer(input)
    }


    return (
        <>
            <h1>Timer : {formateTimer(timer)}</h1>

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStp}> Stop</button>
            <button onClick={handleReset}>Reset</button>
            <br />
            <br />
            <br />
            <input onChange={handleInput} type='number' placeholder='initial value in seconds' />
        </>
    );
}

export default ReffTimer
