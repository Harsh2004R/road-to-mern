import { AUTH, TOKEN } from "./actionType"

export const authAction = () => {
    return { type: AUTH }
}
export const tokenAction = (payload) => {
    return { type: TOKEN, payload }
}