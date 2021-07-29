import { ADD_ITEM, DELETE_ITEM, LOAD_TODOS } from "./todoActionTypes";

const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

const deletItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

const loadTodos =() =>{
    return (dispatch) =>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(todos => {
                return dispatch({
                    type: LOAD_TODOS,
                    payload: todos
                })
            })
    }
}

export { addItem, deletItem, loadTodos }