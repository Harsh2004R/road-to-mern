import React, { useReducer } from 'react'

const formReducer = (state, { type, payload }) => {
    switch (type) {
        case "NAME": {
            return { ...state, name: payload }
        }
        case "AGE": {
            return { ...state, age: payload }
        } default: {
            return state;
        }
    }
}

function FormWithReducer() {
    const [state, dispatch] = useReducer(formReducer, { name: "", age: "" })
    const handleSub = (e) => {
        e.preventDefault()
        console.log(state)
    }
    return (
        <form onSubmit={handleSub}>
            <input type='text' onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })} placeholder='enter name' />
            <input type='text' onChange={(e) => dispatch({ type: "AGE", payload: e.target.value })} placeholder='enter age' />
            <input type='submit' value={"Submit"} />
        </form>
    )
}

export default FormWithReducer
