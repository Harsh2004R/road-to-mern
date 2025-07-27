import axios from "axios"
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
export const postProducts = (formData) => (dispatch) => {
    dispatch(requestAction())
    axios.post("http://localhost:3002/products", formData)
        .then((res) => {
            console.log(res.data);
            dispatch(postSuccessAction(res.data))
        }).catch((err) => {
            dispatch(failureAction(err));
            console.log(err)
        })
}
export const getProducts = (filterData) => (dispatch) => {
    dispatch(requestAction())
    axios.get("http://localhost:3002/products", filterData)
        .then((res) => {
            dispatch(getSuccessAction(res.data));
        }).catch((err) => {
            dispatch(failureAction(err));
            console.log(err)
        })
}


