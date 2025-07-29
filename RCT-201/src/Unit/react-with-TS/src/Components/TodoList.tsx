import type { dataType } from "../constants"
function TodoList({ id, title, status }: dataType) {
    return (
        <div >
            <p> Todo ID: {id}</p>
            <p> Todo ID: {title}</p>
            <p> Todo ID: {status ? "" : ""} </p>
        </div>
    )
}

export default TodoList
