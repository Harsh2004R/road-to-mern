import { legacy_createStore, combineReducers } from "redux"
import { reducer as todoReducer } from "./ReduxD6/Todos/reducer"
const rootReducer = combineReducers({
    todoReducer,
})
export const store = legacy_createStore(rootReducer)


