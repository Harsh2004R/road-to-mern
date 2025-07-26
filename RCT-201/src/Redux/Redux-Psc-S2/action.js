import { INC, DEC, TOGGLE_THEME, RESET } from "./actionTypes"

export const toggleAction = (payload) => {
    return { type: TOGGLE_THEME, payload }
}
export const incAction = (payload) => {
    return { type: INC,payload }
}

export const decAction = (payload) => {
    return { type: DEC, payload }
}

export const resetAction = () => {
    return { type: RESET, }
}




