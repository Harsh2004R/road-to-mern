import React from 'react';
import { store } from "../../Redux/store";
import { incrementAction, decrementAction } from '../../Redux/actions';
function D3Counter() {

  const { getState, dispatch } = store
  const handleAdd = () => {
    dispatch(incrementAction())
    console.log(store.getState().counter)
  }
  const handleDec = () => {
    dispatch(decrementAction())
    console.log(store.getState().counter)
  }
  return (
    <div>
      <h1>Counter :{store.getState().counter}</h1>
      <button onClick={handleAdd}>
        Add
      </button>
      <button onClick={handleDec}>
        del
      </button>
    </div>
  )
}

export default D3Counter
