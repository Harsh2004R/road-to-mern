import { GET_SUCCESS, POST_SUCCESS, FAILURE, REQUEST } from "./actionTypes"

export const requestAction = () => {
    return { type: REQUEST }
}
export const failureAction = (payload) => {
    return { type: FAILURE, payload }
}
export const getSuccessAction = (payload) => {
    return { type: GET_SUCCESS, payload }
}
export const postSuccessAction = (payload) => {
    return { type: POST_SUCCESS, payload }
}





