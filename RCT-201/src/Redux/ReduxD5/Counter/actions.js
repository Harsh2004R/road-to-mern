import { INC, DEC } from "./actionTypes";


export const actionIncrementCount = (payload) => {
    return { type: INC, payload }
}
export const actionDecrementCount = (payload) => {
    return { type: DEC, payload }
}












