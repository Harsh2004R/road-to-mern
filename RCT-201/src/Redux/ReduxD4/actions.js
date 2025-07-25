import { GET_TODO_SUCCESS, GET_TODO_REQUEST, GET_TODO_FAIL, POST_TODO_SUCCESS } from "./actionTypes";

export const todoRequestAction = () => {
    return { type: GET_TODO_REQUEST }
}
export const todoSuccessAction = (payload) => {
    return { type: GET_TODO_SUCCESS, payload }
}
export const todoFailAction = () => {
    return { type: GET_TODO_FAIL }
}
export const todoPostSuccess = (payload) => {
    return { type: POST_TODO_SUCCESS, payload }
}













