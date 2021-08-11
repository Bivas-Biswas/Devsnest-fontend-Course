import { combineReducers } from "redux";
import counterReducers from "./counterReducers";
import notesReducers from "./NotesReducers";

const rootReducers = combineReducers({
    counter: counterReducers,
    notes: notesReducers
})

export type reducerType = ReturnType<typeof rootReducers>

export default rootReducers
