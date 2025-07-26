import { TOGGLE_THEME, INC, DEC, RESET } from "./actionTypes"

const initState = {
    Theme: "Light",
    Counter: 10,
}
export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case TOGGLE_THEME: {
            return {
                ...state, Theme: payload
            }
        }
        case INC: {
            return {
                ...state, Counter: state.Counter + payload
            }
        }
        case DEC: {
            return {
                ...state, Counter: state.Counter - payload
            }
        }
        case RESET: {
            return {
                ...state, Counter: 10
            }
        }
        default: {
            return state;
        }
    }
}



