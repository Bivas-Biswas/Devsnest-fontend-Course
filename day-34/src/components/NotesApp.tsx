import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "../redux/reducers/rootReducers";
import { addNote, deleteNote } from "../redux/actions/notesActions";


const NotesApp = () => {
    const notes = useSelector((state: reducerType) => state.notes)
    const dispatch = useDispatch()
    const [input, setInput] = useState<string>("")

    return (
        <div className='notes_app'>
            <div className='notes_add'>
                <input
                    type="text"
                    value={input}
                    placeholder='add notes'
                    onChange={(event => setInput(event.target.value))}
                />
                <button onClick={() => {
                    dispatch(addNote(input))
                    setInput('')
                }}>Add
                </button>
            </div>

            {notes.length === 0 ? (
                    <h1>Add Notes</h1>
                ) :
                <div className="notes_list">
                    {notes.map((note: string, index: number) => (
                        <li key={index}>
                            <h3>{note}</h3>
                            <button onClick={() => dispatch(deleteNote(index))}>Del</button>
                        </li>
                    ))}
                </div>
            }
        </div>
    );
};

export default NotesApp;
