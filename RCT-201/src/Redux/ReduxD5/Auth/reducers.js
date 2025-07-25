import { TOKEN, AUTH } from "./actionType";


const initState = {
    token: "",
    isAuth: false
}
export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case AUTH: {
            return { ...state, isAuth: true }
        }
        case TOKEN: {
            return { ...state, token: payload }
        }
        default: {
            return state;
        }
    }
}






