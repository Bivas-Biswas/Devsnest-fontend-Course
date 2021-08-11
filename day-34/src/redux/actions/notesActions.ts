import { ADD_NOTE, DELETE_NOTE } from "../actionsTypes";

const addNote = (name: string) => {
    return {
        type: ADD_NOTE,
        payload: name
    }
}

const deleteNote = (id: number) => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}

export { addNote, deleteNote }