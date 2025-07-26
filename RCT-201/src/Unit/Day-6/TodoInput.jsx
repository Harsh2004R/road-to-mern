import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getReqAction, getReqFailureAction, postTodosReqAction } from "../../Redux/ReduxD6/Todos/action"
import axios from "axios"
function TodoInput() {

    const isLoading = useSelector((store) => store.isLoading)
    const [input, setInput] = useState("")
    const newTodo = {
        id: Date.now(),
        title: input,
        status: false
    }

    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getReqAction())
        axios.post("http://localhost:3001/todos", newTodo)
            .then((res) => {
                dispatch(postTodosReqAction(res.data))
            }).catch((err) => {
                console.log(err)
                dispatch(getReqFailureAction(err))
            })
        setInput("")
    }
    return (
        <>
            {
                isLoading && <h1>Loading...</h1>
            }
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add Your todo here...' />
                <input type="submit" value={"Add"} />
            </form>
        </>
    )
}

export default TodoInput
