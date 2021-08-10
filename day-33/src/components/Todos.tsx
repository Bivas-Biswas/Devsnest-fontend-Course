import React, {useState} from 'react';
import TodoList from "./TodoList";

interface ITodoType {
    title: string,
    done: boolean,
    index: number
}

function Todos() {
    const [todos, setTodos] = useState<ITodoType[]>([])
    const [input, setInput] = useState<string>('')

    const handleDelete = (id: number) => {
        const newTodos = todos.filter((todo) => (
            todo !== todos[id]
        ))
    }

    return (
        <div className="todos">
            <div className="input-field">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>
                <button
                    onClick={() => {
                        setTodos([{title: input, done: false, index: todos.length}, ...todos])
                        setInput('')
                    }}
                >
                    ADD
                </button>
            </div>
            {
                todos.map((todo, index) => (
                        <TodoList key={index} title={todo.title} done={todo.done} index={todo.index}/>
                    )
                )
            }
        </div>

    );
}

export default Todos;