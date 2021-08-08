import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/Counter/counterSlice";
import { getUsers } from "../redux/Counter/UsersSlice";

function Counter() {
    const count = useSelector((state => state.counter.value))
    const users =useSelector((state => state.users.list))
    let a = 0
    console.log(a+1)
    const dispatch = useDispatch()

    useEffect( () =>{
        dispatch(getUsers())
        console.log('1st')
    },[dispatch])

    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >Increment
            </button>
            <span>{count}</span>
            <button
                aria-label='Dercement value'
                onClick={() => {
                    dispatch(decrement())

                }}
            >Decrement
            </button>
            {JSON.stringify(users)}
        </div>
    );
}

export default Counter;