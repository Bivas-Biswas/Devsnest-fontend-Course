import { ADD_NOTE, DELETE_NOTE } from "../actionsTypes";

interface IaddNoteAction {
    type: string,
    payload: string,
}

interface IdeleteNoteAction {
    type: string,
    payload: number,
}

type ActionType = IaddNoteAction | IdeleteNoteAction

const notesReducers = (state: any = [], action: ActionType) => {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, action.payload]
        case DELETE_NOTE:
            return state.filter(
                (_: string, index: number) => index !== action.payload
            )
        default:
            return state
    }
}

export default notesReducers