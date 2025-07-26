import React from 'react'
import { BrowserRouter } from "react-router-dom"
import CrudRoutes from './CrudRoutes'
import { Provider } from 'react-redux'
import {store} from "../../Redux/Redux_CRUD/store"

function CrudMain() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <CrudRoutes />
            </BrowserRouter>
        </Provider>

    )
}

export default CrudMain
