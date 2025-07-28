import axios from "axios"
import { GET_SUCCESS, POST_SUCCESS, FAILURE, REQUEST, DELETE_PRODUCT, PATCH_PRODUCT } from "./actionTypes"

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
export const deleteProductAction = () => {
    return { type: DELETE_PRODUCT }
}

export const patchProductAction = () => {
    return { type: PATCH_PRODUCT }
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
export const getProducts = (querry) => (dispatch) => {
    dispatch(requestAction())
    axios.get(`http://localhost:3002/products${querry}`,)
        .then((res) => {
            dispatch(getSuccessAction(res.data));
            console.log(res.data)
        }).catch((err) => {
            dispatch(failureAction(err));
            console.log(err)
        })
}


export const deleteProduct = (id) => (dispatch) => {
    dispatch(requestAction());
    return axios.delete(`http://localhost:3002/products/${id}`)
        .then((data) => {
            dispatch(deleteProductAction());
            console.log(data)
        })
        .catch((err) => {
            dispatch(failureAction(err));
            console.log(err)
        })

}

export const patchProduct = (id, data) => (dispatch) => {
    dispatch(requestAction());
   axios.patch(`http://localhost:3002/products/${id}`, data)
        .then((data) => {
            dispatch(patchProductAction());
            console.log(data)
        })
        .catch((err) => {
            dispatch(failureAction(err));
            console.log(err)
        })

}



