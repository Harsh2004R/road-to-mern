import { AUTH, TOKEN } from "../Products/actionTypes"
import axios from "axios"
export const isAuthAction = () => {
    return { type: AUTH }
}

export const isTokenAction = (payload) => {
    return { type: TOKEN, payload }
}

// Thunk function
export const loginUser = (formData) => async (dispatch) => {
    try {
        const res = await axios.post("https://reqres.in/api/login", formData, {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        });
        dispatch(isAuthAction());
        dispatch(isTokenAction(res.data.token));
    } catch (err) {
        console.error("Login failed", err);
    }
};






