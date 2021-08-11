import React from 'react';
import Counter from "./components/Counter";
import NotesApp from "./components/NotesApp";

function App() {

    return (
        <div className="App">
            <h2>Counter App</h2>
            <Counter />
            <h2>NoteTaking App</h2>
            <NotesApp />
        </div>
    );
}

export default App;
