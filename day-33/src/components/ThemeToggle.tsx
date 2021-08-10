import React, {useContext} from 'react';
import ThemeContext, {IThemeContextType} from "../context/ThemeContext";

function ThemeToggle() {
    const {theme, setTheme} = useContext<IThemeContextType>(ThemeContext)

    return (
        <button className={!theme ? 'theme-toggle dark' : 'theme-toggle'}
                onClick={() => {
                    setTheme(!theme)
                }}>
            {theme ? "Dark" : "Light"}
        </button>
    );
}

export default ThemeToggle;