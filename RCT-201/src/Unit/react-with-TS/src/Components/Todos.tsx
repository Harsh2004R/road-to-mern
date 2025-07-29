import { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import type { dataType } from "../constants"
import { makeGetReq } from "../api";
import TodoList from './TodoList';
function Todos() {
    const [todo, setTodo] = useState<dataType[]>([])
    const [change, setChange] = useState<boolean>(false)
    const handleUpdate = () => {
        setChange((prev) => !prev)
    }
    useEffect(() => {

        makeGetReq().then((res) => {
            setTodo(res)
        })

    }, [change])
    return (
        <>
            <h1>
                Todos..
            </h1>
            <AddTodo />
            {
                todo.map((el) => (
                    <TodoList key={el.id} {...el} handleUpdate={handleUpdate} />
                ))
            }
        </>

    )
}

export default Todos
