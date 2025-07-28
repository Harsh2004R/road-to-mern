import { AUTH, TOKEN, FAILURE } from "../Products/actionTypes"
import axios from "axios"
export const isAuthAction = () => {
    return { type: AUTH }
}

export const isTokenAction = (payload) => {
    localStorage.setItem("auth-token", payload)
    return { type: TOKEN, payload }
}
export const isFailAction = () => {
    return { type: FAILURE, payload }
}

// Thunk function
export const loginUser = (formData) => async (dispatch) => {
    return await axios.post("https://reqres.in/api/login", formData, {
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    }).then((res) => {
        dispatch(isAuthAction());
        dispatch(isTokenAction(res.data.token));
    }).catch((err) => {
        dispatch(isFailAction(err));
        return new Error;
    })
};






