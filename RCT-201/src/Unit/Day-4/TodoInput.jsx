import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { todoPostSuccess, todoFailAction, todoRequestAction } from "../../Redux/ReduxD4/actions"
import axios from "axios"
function TodoInput() {
  const todos = useSelector((store) => store.todos)
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
    dispatch(todoRequestAction())
    axios.post("http://localhost:3001/todos", newTodo)
      .then((res) => {
        dispatch(todoPostSuccess(res.data))
      }).catch((err) => {
        console.log(err)
        dispatch(todoFailAction())
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
