import React, { useState } from 'react'
import { makePostReq } from '../api';
import type { dataType } from "../constants";
function AddTodo() {
    const [text, setText] = useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let newTodo: dataType = {
            title: text,
            status: false
        }
        makePostReq(newTodo);

    }
    return (
        <div>
            Add todos..
            <form onSubmit={handleAdd}>
                <br>
                </br>
                <input onChange={handleChange} type='text' placeholder='Add your todo here...' value={text} />
                <br>
                </br>
                <button type='submit'>Add</button>
            </form>
        </div >
    )
}

export default AddTodo
