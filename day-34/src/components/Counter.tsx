import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "../redux/reducers/rootReducers";
import { Decrement, Increment } from "../redux/actions/counterActions";


function Counter() {
    const counter = useSelector((state: reducerType) => state.counter)
    const dispatch = useDispatch()
    return (
        <div className="counter_app">
            <button onClick={() => dispatch(Decrement(1))}>-</button>
            <h3>{counter}</h3>
            <button onClick={() => dispatch(Increment(1))}>+</button>
        </div>
    );
}

export default Counter;
