import { legacy_createStore } from "redux";
import reducers from "./reducers";
const initState = {
    todos: [],
    isLoading: true,
    isError: false
}


export const store = legacy_createStore(reducers, initState)




