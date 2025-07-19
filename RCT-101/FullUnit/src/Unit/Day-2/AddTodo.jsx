import { useState } from 'react'
function AddTodo({ prop1, prop2, prop3 }) {
  // console.log(handleChange, text, handleAdd)
  
  return (
    <>
      <h1>TODO</h1>
      <input value={prop1} onChange={prop2} type='text' placeholder='add your todo'></input>
      <button onClick={prop3}>
        ADD
      </button>
    </>
  )
}

export default AddTodo
