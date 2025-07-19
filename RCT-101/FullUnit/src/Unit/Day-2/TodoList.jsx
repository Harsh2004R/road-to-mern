
function TodoList({ data, dtl, toggle }) {

    return (
        <>
            {
                data.map((el, idx) => (
                    <div key={idx}>

                        <h3> {el.name}</h3>
                        <p>{el.id}</p>
                        <h5>{el.status === true ? "true" : "false"}</h5>
                        <br>
                        </br>
                        <button onClick={() => { dtl(el.id) }}>Delete</button>
                        <button onClick={() => { toggle(el.id) }}>Toggle</button>
                    </div>
                ))
            }
        </>
    )
}

export default TodoList
