import { useEffect } from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { getReqAction, getReqFailureAction, getReqSuccessAction } from "../../Redux/ReduxD6/Todos/action"
import axios from "axios"
function TodoItem() {
  const { todos, isLoading } = useSelector((store) => {
    return {
      todos: store.todoReducer.todos,
      isLoading: store.isLoading,
    }
  }, shallowEqual)
  const dispatch = useDispatch();
  function getTodos() {
    dispatch(getReqAction())
    axios.get("http://localhost:3001/todos").then((res) => {
      dispatch(getReqSuccessAction(res.data))
    }).catch((err) => {
      dispatch(getReqFailureAction())
      console.log("error", err)
    })
  }
  useEffect(() => {
    getTodos()
  }, [])
  return (
    <>
      {
        isLoading && <h1>Loading...</h1>
      }
      {
        todos.length > 0 && todos.map((el, id) => (
          <div key={id}>
            <p>
              TODO ID :- {el.id}
            </p>
            <p>
              TODO TITLE :- {el.title}
            </p>
            <p >
              TODO STATUS :- <span style={{ color: el.status ? "blue" : "red" }}>
                {el.status ? "True" : "false"}
              </span>
            </p>
          </div>
        ))
      }

    </>
  )
}

export default TodoItem
