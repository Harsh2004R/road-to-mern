import React from 'react'
import Todos from './Todos'
import { Provider } from 'react-redux'
import { store } from '../../Redux/store'

function D6Main() {
    return (
        <Provider store={store}>
            <Todos />
        </Provider>
    )
}

export default D6Main
