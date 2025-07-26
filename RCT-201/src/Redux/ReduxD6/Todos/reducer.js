import { GET_REQUEST_SUCCESS, GET_REQUEST, GET_REQUEST_FAILURE, POST_TODOS } from "./actionTypes"
const initState = {
    todos: [],
    isLoading: false,
    isError: null
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_REQUEST: {
            return { ...state, isLoading: true }
        }
        case GET_REQUEST_SUCCESS: {
            return { ...state, isLoading: false, todos: payload }
        }
        case GET_REQUEST_FAILURE: {
            return { ...state, isLoading: false, isError: payload }
        }
        case POST_TODOS: {
            return { ...state, isLoading: false, todos: [...state.todos, payload] }
        }
        default: {
            return state;
        }
    }
}



