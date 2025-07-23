import React, { useReducer } from 'react'
const reducerFun = (state, { type, payload = 1 }) => {
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
function ReducerTimer() {
    const [count, dispatch] = useReducer(reducerFun, 0)
    return (
        <>
            <div>
                <button onClick={() => dispatch({ type: "DEC" })}>
                    Dec
                </button>
                <div>
                    {count}
                </div>
                <button onClick={() => dispatch({ type: "INC" })}>
                    Inc
                </button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "DEC", payload: 10 })}>
                    Dec
                </button>
                <div>
                    {count}
                </div>
                <button onClick={() => dispatch({ type: "INC", payload: 10 })}>
                    Inc
                </button>
            </div>
        </>
    )
}

export default ReducerTimer
