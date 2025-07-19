import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function Todo() {
    const [text, setText] = useState("");
    const [todo, setToad] = useState([])
    const handleChange = (e) => {
        setText(e.target.value)
    }
    function handleAdd() {
        if (text.length <= 3) {
            alert("Add a todo first")
        } else {
            let newTodo = {
                id: new Date().getTime(),
                name: text,
                status: false
            }
            let newTodos = [...todo, newTodo];
            setToad(newTodos);
            setText("")
        }
    }

    const handleDelete = (id) => {
        let filteredData = todo.filter((el) => el.id !== id)
        setToad(filteredData);
    }
    function handleToggle(id) {
        let Toggled = todo.map((el) => {
            if (el.id == id) {
                if (el.status === false) {
                    return { ...el, status: true }
                } else {
                    return { ...el, status: false }
                }
            } else {
                return el;
            }
        })
        setToad(Toggled)
    }
    return (
        <>
            <AddTodo prop1={text} prop2={handleChange} prop3={handleAdd} />
            <TodoList data={todo} dtl={handleDelete} toggle={handleToggle} />
        </>
    )
}

export default Todo
