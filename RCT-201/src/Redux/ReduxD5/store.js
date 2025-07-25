import { legacy_createStore, combineReducers } from "redux";
import { reducer as counterReducer } from "./Counter/reducers";
import { reducer as todoReducer } from "./Todo/reducers";
import { reducer as authReducer } from "./Auth/reducers";

const rootReducer = combineReducers({
    counterReducer,
    todoReducer,
    authReducer
})
export const store = legacy_createStore(rootReducer)




