import React, { useState, useReducer } from 'react'
import TodoInput from './TodoInput'

function Day12Todo() {
    const [todo, setTodo] = useState([]);
    const [state, dispatch] = useReducer(reduceTodo, [])
    const reduceTodo = (state, action) => {
        switch (action.type) {
            case "ADD": { }
            case "TOGGLE": { }
            case "DELETE": { }
            default: {
                return state;
            }
        }
    }



    const handleAdd = (val) => {
        setTodo([...todo, { id: Date.now(), value: val, isCompleted: false }])
    }
    const update = (id) => {
        setTodo(
            todo.map((el) => {
                if (el.id === id) {
                    return { ...el, isCompleted: !el.isCompleted };
                }
                return el;
            })
        );
    }

    const dltTodo = (id) => {
        setTodo(
            todo.filter((el) => el.id !== id)
        );
    }
    return (
        <div>

            <TodoInput handleAdd={handleAdd} />
            {
                todo.map((el) => (
                    <div key={el.id} >
                        <span style={{ border: "1px solid red" }} onClick={() => update(el.id)}>
                            {el.value} - {el.isCompleted ? "Completed" : "Not completed"}
                        </span>
                        <button onClick={() => dltTodo(el.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Day12Todo
