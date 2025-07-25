import { legacy_createStore } from "redux";
import counterReducer from "./counterReducer";
const initialState = {
    counter: 0,
    todos: [],
    products: [],
    isAuth: false

}
export const store = legacy_createStore(counterReducer, initialState)
