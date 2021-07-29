import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItem, loadTodos } from "../Redux";

function AddTodo(props) {
    const [item, setItem] = useState('')
    const dispatch = useDispatch()

    return (
        <div>
            <input
                type='text'
                placeholder='Add a todo...'
                value={item}
                onChange={(event => {
                    setItem(event.target.value)
                })}
            />
            <button
                onClick={() => {
                    dispatch(addItem({
                        title: item,
                        done: false
                    }))
                    setItem('')
                }
                }
            >
                Add
            </button>

            <div>
                <button onClick={() => {
                    dispatch(loadTodos())
                }}
                >
                    Load Todos
                </button>
            </div>
        </div>
    );
}

export default AddTodo;
