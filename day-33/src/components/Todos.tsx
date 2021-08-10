import React, {useState} from 'react';
import TodoList from "./TodoList";

interface ITodoType {
    title: string,
    done: boolean
}

function Todos() {
    const [todos, setTodos] = useState<ITodoType[]>([])
    const [input, setInput] = useState<string>('')

    const handleDelete = (id: number) => {
        const newTodos = todos.filter((todo, index) => (
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
                        setTodos([{title: input, done: false}, ...todos])
                        setInput('')
                    }}
                >
                    ADD
                </button>
            </div>
            {
                todos.map((todo, index) => (
                        <TodoList key={index} title={todo.title} done={todo.done}/>
                    )
                )
            }
        </div>

    );
}

export default Todos;