import React, { useState } from 'react'
import { D8TodoItems } from "./D8TodoItems"
function D8Todo() {
    const initState = [

        {
            id: 1,
            title: "Learn React",
            status: true
        },
        {
            id: 2,
            title: "Learn Node",
            status: false
        },
        {
            id: 3,
            title: "Learn MERN",
            status: true
        }
    ]
    const [todo, setTodo] = useState(initState);
    const [input, setInput] = useState("");
    const handleInpchange = (e) => {
        let { value } = e.target
        setInput(value)
    }
    const handleAddTodo = () => {
        const newTodo = {
            id: Math.random(),
            title: input,
            status: false
        }
        setTodo([...todo, newTodo])
        setInput("");
    }
    return (
        <div>
            <h1> TODO APP </h1>
            <input type='text' placeholder='Enter Your Task' value={input} onChange={handleInpchange} />
            <button onClick={handleAddTodo}>Add</button>
            {todo.map((el) => (
                <D8TodoItems id={el.id} title={el.title} status={el.status} key={el.id} />
            ))
            }
        </div>
    )
}

export default D8Todo
