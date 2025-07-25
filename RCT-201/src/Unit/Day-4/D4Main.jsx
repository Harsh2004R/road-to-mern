import React from 'react'
import TodoItem from './TodoItem'
import TodoInput from "./TodoInput"
import { Provider } from 'react-redux'
import { store } from '../../Redux/ReduxD4/store'

function D4Main() {
  return (
    <Provider store={store}>
      <TodoInput />
      <TodoItem />
    </Provider >
  )
}

export default D4Main
