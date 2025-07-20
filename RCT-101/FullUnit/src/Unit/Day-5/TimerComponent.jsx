import React, { useState, useEffect } from 'react'

function TimerComponent() {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(prev => {
                console.log(prev, Date.now())
                if (prev <= 1) {
                    clearInterval(timerInterval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        const cleanup = () => {
            clearInterval(timerInterval);
            console.log("cleanup function called.>")
        }
        return cleanup // Clean up on unmount
    }, []);

    return (
        <>
            <h1>Timer : {timer}</h1>
        </>
    );
}

export default TimerComponent;
