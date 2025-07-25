import { GET_TODO_SUCCESS, GET_TODO_REQUEST, GET_TODO_FAIL, POST_TODO_SUCCESS } from "./actionTypes";

function reducers(state, { type, payload }) {
    switch (type) {
        case GET_TODO_REQUEST: {
            return { ...state, isLoading: true }
        }
        case GET_TODO_SUCCESS: {
            return { ...state, isLoading: false, todos: payload }
        }
        case GET_TODO_FAIL: {
            return { ...state, isLoading: false, isError: true }
        }
        case GET_TODO_FAIL: {
            return { ...state, isLoading: false, isError: true }
        }
        case POST_TODO_SUCCESS: {
            return { ...state, isLoading: false, todos: [...state.todos, payload] }
        }
        default: {
            return state
        }
    }
}
export default reducers