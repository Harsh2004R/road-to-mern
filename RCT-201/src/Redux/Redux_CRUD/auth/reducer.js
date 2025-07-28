import { AUTH, TOKEN } from "../Products/actionTypes"


const lsAuthToken = localStorage.getItem("auth-token")
const productState = {
    isAuth: !!lsAuthToken,
    token: lsAuthToken || "",
}

export const reducer = (state = productState, { type, payload }) => {
    switch (type) {
        case AUTH: return { ...state, isAuth: true }
        case TOKEN: return { ...state, token: payload }
        default: {
            return state
        }
    }
}





