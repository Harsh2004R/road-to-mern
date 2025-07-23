import React, { useState } from 'react'

function TodoInput({ handleAdd }) {
    const [value, setValue] = useState("");
    const handleSub = (e) => {
        e.preventDefault();
        if (value) {
            handleAdd(value);
            setValue("")
        }
    }
    return (
        <div>
            <form onSubmit={handleSub}>
                <input onChange={(e) => setValue(e.target.value)} type='text' placeholder='add your todo' value={value} />
                <input type="submit" value={"Add Todo"} />
            </form>
        </div>
    )
}

export default TodoInput
