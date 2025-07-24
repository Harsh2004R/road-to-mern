import React, { useReducer } from 'react'

const reducer = (state, { type, payload = 1 }) => {
    switch (type) {
        case "INC": {
            return state + payload;
        }
        case "DEC": {
            return state - payload;
        }
        default: {
            return state;
        }
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <h1>Counter : {state}</h1>
            <button onClick={() => dispatch({ type: "INC", payload: 1 })}>
                inc
            </button>
            <button onClick={() => dispatch({ type: "DEC", payload: 2 })}>
                dec
            </button>
        </>
    )
}

export default Counter
