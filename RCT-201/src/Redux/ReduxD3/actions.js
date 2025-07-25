import { INC, DEC } from "./actionTypes";

export const incrementAction = (payload = 1) => ({
    type: INC,
    payload,
});

export const decrementAction = (payload = -1) => ({
    type: DEC,
    payload,
});