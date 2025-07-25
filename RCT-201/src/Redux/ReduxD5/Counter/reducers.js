import { INC, DEC } from "./actionTypes";

const initState = {
    counter: 0,
}

export const reducer = (state=initState, { type, payload }) => {
    switch (type) {
        case INC: {
            return { ...state, counter: state.counter + payload }
        }
        case DEC: {
            return { ...state, counter: state.counter - payload }
        }
        default: {
            return state
        }
    }
}
