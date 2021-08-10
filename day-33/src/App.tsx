import React, {useState} from 'react';
import ThemeContext from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Todos from "./components/Todos";

const App = () => {
    const [theme, setTheme] = useState<boolean>(true)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={!theme ? 'App dark' : 'App'}>
                <Todos/>
                <ThemeToggle/>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
