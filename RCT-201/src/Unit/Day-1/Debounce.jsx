import React, { useState, useEffect } from 'react'

function Debounce() {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        let id;
        return () => {
            id && clearInterval(id);
            id = setTimeout(() => {
                setScroll((prev) => prev + 1)
            }, 1000)
        }
    }
    const debounceFunction = handleScroll();
    useEffect(() => {
        window.addEventListener("scroll", debounceFunction)
        return () => {
            window.removeEventListener("scroll", debounceFunction)
        }
    }, [])

    return (
        <div style={{ height: "200vh" }}>
            <h1 style={{ position: "fixed", top: "100px" }}>Scroll  :{scroll}</h1>
        </div>
    )
}

export default Debounce
