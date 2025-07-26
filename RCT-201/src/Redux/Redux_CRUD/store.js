import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as ProductReducer } from "../Redux_CRUD/Products/reducre";
import { reducer as AuthReducer } from "../Redux_CRUD/auth/reducer";
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
    ProductReducer,
    AuthReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))








