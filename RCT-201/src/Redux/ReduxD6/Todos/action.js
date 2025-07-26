import { GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS, POST_TODOS } from "./actionTypes"



export const getReqAction = () => {
    return { type: GET_REQUEST }
}

export const getReqSuccessAction = (payload) => {
    return { type: GET_REQUEST_SUCCESS, payload }
}


export const getReqFailureAction = (payload) => {
    return { type: GET_REQUEST_FAILURE, payload }
}


export const postTodosReqAction = (payload) => {
    return { type: POST_TODOS, payload }
}


