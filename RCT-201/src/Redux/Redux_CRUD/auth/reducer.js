import { AUTH, TOKEN } from "../Products/actionTypes"

const productState = {
    isAuth: false,
    token: ""
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





