import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionIncrementCount, actionDecrementCount } from "../../Redux/ReduxD5/Counter/actions"


function Counter() {
    const counter = useSelector((store) => store.counterReducer.counter);


    const dispatch = useDispatch();
    return (
        <div>
            <h1>
                Counter : {counter}
            </h1>

            <button onClick={() => dispatch(actionIncrementCount(1))}>INC</button>
            <button onClick={() => dispatch(actionDecrementCount(1))}>DEC</button>
        </div>
    )
}

export default Counter
